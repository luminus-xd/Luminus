import { use } from "react";

type User = {
  id: number;
  login: string;
};

const fetchUsers: () => Promise<User[]> = async () => {
  const res = await fetch("https://api.github.com/users");
  return res.json();
};

export default function Page() {
  const users = use(fetchUsers());
  return (
    <div>
      <h1>GitHub Users!</h1>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              {user.id}: {user.login}
            </div>
          );
        })}
      </div>
    </div>
  );
}
