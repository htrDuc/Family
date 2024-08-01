import prisma from "../lib/prisma";

async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export default async function Home() {
  const users = await getUsers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
