import { User, columns } from "./columns";
import { DataTable } from "@/components/user-data-table/DataTable";

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return [
    {
      user_id: "f9d0jt4w",
      username: "User8337",
      first_name: "Sophia",
      last_name: "Rodriguez",
      email: "sophia.rodriguez@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "user",
    },
    {
      user_id: "f9x8pw2l",
      username: "User1336",
      first_name: "James",
      last_name: "Johnson",
      email: "james.johnson@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "user",
    },
    {
      user_id: "p3s8dj6n",
      username: "User4911",
      first_name: "Olivia",
      last_name: "Smith",
      email: "olivia.smith@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "player",
    },
    {
      user_id: "g4a9pn2k",
      username: "User6504",
      first_name: "Isabella",
      last_name: "Jones",
      email: "isabella.jones@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "user",
    },
    {
      user_id: "d8n6x0zw",
      username: "User5423",
      first_name: "Noah",
      last_name: "Martinez",
      email: "noah.martinez@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "admin",
    },
    {
      user_id: "d7g2x6fw",
      username: "User8707",
      first_name: "Emma",
      last_name: "Rodriguez",
      email: "emma.rodriguez@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "player",
    },
    {
      user_id: "r5n1j8mo",
      username: "User5889",
      first_name: "Ava",
      last_name: "Rodriguez",
      email: "ava.rodriguez@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "author",
    },
    {
      user_id: "s0l2k6pm",
      username: "User3203",
      first_name: "James",
      last_name: "Williams",
      email: "james.williams@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "admin",
    },
    {
      user_id: "dq7r4y92",
      username: "User7516",
      first_name: "Sophia",
      last_name: "Johnson",
      email: "sophia.johnson@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "author",
    },
    {
      user_id: "sb5y9xqz",
      username: "User352",
      first_name: "Olivia",
      last_name: "Davis",
      email: "olivia.davis@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "user",
    },
    {
      user_id: "af4z8n2q",
      username: "User6888",
      first_name: "Noah",
      last_name: "Rodriguez",
      email: "noah.rodriguez@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "user",
    },
    {
      user_id: "6b1r9t8f",
      username: "User3728",
      first_name: "Emma",
      last_name: "Garcia",
      email: "emma.garcia@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "player",
    },
    {
      user_id: "cn2k5t3b",
      username: "User2761",
      first_name: "James",
      last_name: "Brown",
      email: "james.brown@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "player",
    },
    {
      user_id: "r3k2t7p9",
      username: "User813",
      first_name: "William",
      last_name: "Martinez",
      email: "william.martinez@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "author",
    },
    {
      user_id: "k4t5x7d2",
      username: "User1809",
      first_name: "Isabella",
      last_name: "Jones",
      email: "isabella.jones@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "admin",
    },
    {
      user_id: "r2q7y6k4",
      username: "User3932",
      first_name: "Olivia",
      last_name: "Smith",
      email: "olivia.smith@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "user",
    },
    {
      user_id: "dq7r4y92",
      username: "User7516",
      first_name: "Sophia",
      last_name: "Johnson",
      email: "sophia.johnson@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "user",
    },
    {
      user_id: "sb5y9xqz",
      username: "User352",
      first_name: "Olivia",
      last_name: "Davis",
      email: "olivia.davis@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "user",
    },
    {
      user_id: "af4z8n2q",
      username: "User6888",
      first_name: "Noah",
      last_name: "Rodriguez",
      email: "noah.rodriguez@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "user",
    },
    {
      user_id: "6b1r9t8f",
      username: "User3728",
      first_name: "Emma",
      last_name: "Garcia",
      email: "emma.garcia@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "player",
    },
    {
      user_id: "cn2k5t3b",
      username: "User2761",
      first_name: "James",
      last_name: "Brown",
      email: "james.brown@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "author",
    },
    {
      user_id: "r3k2t7p9",
      username: "User813",
      first_name: "William",
      last_name: "Martinez",
      email: "william.martinez@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "user",
    },
    {
      user_id: "k4t5x7d2",
      username: "User1809",
      first_name: "Isabella",
      last_name: "Jones",
      email: "isabella.jones@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "user",
    },
    {
      user_id: "r2q7y6k4",
      username: "User3932",
      first_name: "Olivia",
      last_name: "Smith",
      email: "olivia.smith@example.com",
      profile_image:
        "https://images.sportschau.de/image/236d41bf-87ff-4d74-ad74-6ccc0f4c0d17/AAABiAAKC9g/AAABjcWeo98/16x9-1920/tischtennis-timo-boll-104.jpg",
      role: "user",
    },
  ];
}

const Admin = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Admin;
