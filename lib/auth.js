import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { authConfig } from "./auth.config.js";
import bcrypt from "bcrypt";

// fetch all the users from db
const fetchUsers = async () => {
  const res = await fetch(
    `https://65f96ca6df151452461194f2.mockapi.io/api/v1/users`
  );
  const users = await res.json();

  return users;
};

const checkUserForLogin = async (credentials) => {
  const users = await fetchUsers();

  // search for the user and check if its exists
  const currUser = users.find(
    (loginUser) => credentials.email === loginUser.email
  );

  if (currUser == undefined) {
    throw new Error("Wrong credentials!");
  }

  const isPasswordCorrect = await bcrypt.compare(
    credentials.password,
    currUser.password
  );

  if (!isPasswordCorrect) {
    throw new Error("Password not correct");
  }

  return currUser;
};

// check if user already exists
export const checkIfUserExists = async (currUser) => {
  const users = await fetchUsers();

  // search for the user and check if its exists
  currUser = users.find((loginUser) => currUser.email === loginUser.email);

  if (currUser == undefined) {
    return null;
  }

  return currUser;
};

// create new user in DB
export const createNewUser = async (user) => {
  const newUser = {
    avatar: user.picture || "",
    username: user.email,
    first_name: user.given_name || "",
    last_name: user.family_name || "",
    email: user.email,
    password: user.password || "123456789",
    birthdate: "1976-11-19T13:26:07.866Z",
    nationality: 42149,
    registration_date: "1994-04-26T07:35:49.260Z",
  };

  const res = await fetch(
    `https://65f96ca6df151452461194f2.mockapi.io/api/v1/users`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }
  );

  if (!res.ok) {
    return "User Registration failed";
  }

  const createdUser = await res.json();

  return createdUser;
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await checkUserForLogin(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        try {
          // check if the user already exists
          const currUser = await checkIfUserExists(profile);

          if (!currUser) {
            // create new user
            const createdUser = await createNewUser(profile);
          }
        } catch (error) {
          console.log("ERROR: ", error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
