export const authConfig = {
  pages: {
    signIn: "/signin",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user_id = user.user_id;
        token.isAdmin = user.isAdmin;
        token.isAuthor = user.isAuthor;
        token.isPlayer = user.isPlayer;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.user_id = token.user_id;
        session.user.isAdmin = token.isAdmin;
        session.user.isAuthor = token.isAuthor;
        session.user.isPlayer = token.isPlayer;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;

      // ADMIN PANEL
      const isOnAdminPanel = request.nextUrl.pathname.startsWith("/admin");
      // CREATE PANEL
      const isOnCreatePanel = request.nextUrl.pathname.startsWith("/create");
      // PROFILE PANEL
      const isOnProfilePanel = request.nextUrl.pathname.startsWith("/profile");
      // LOGIN PAGE
      const isOnLoginPage = request.nextUrl.pathname.startsWith("/signin");
      // REGISTER PAGE
      const isOnRegisterPage = request.nextUrl.pathname.startsWith("/signup");

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // ONLY AUTHOR CAN REACH THE CREATE PAGE
      if (isOnCreatePanel && !user?.isAuthor && !user?.isAdmin) {
        return false;
      }

      // ONLY LOGGED IN USERS CAN REACH THE PROFILE PAGE
      if (isOnProfilePanel && !user) {
        return false;
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN / SIGNUP PAGES
      if ((isOnLoginPage || isOnRegisterPage) && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
