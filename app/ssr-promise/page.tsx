import React from "react";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
}

export default async function Page() {
  const [users, todos] = await Promise.all([getUsers(), getTodos()]);

  const combinedData = todos.map((todo: any) => {
    const user = users.find((user: any) => user.id === todo.userId);
    return {
      id: todo.id,
      todoTitle: todo.title,
      userName: user ? user.name : "Unknown User",
    };
  });

  return (
    <div className="flex gap-10">
      <div className="w-[100%]">
        <h1 className="text-[30px]">User Tasks</h1>
        {combinedData.map((item: any) => (
          <div key={item.id} className="mb-4 p-4 border rounded-lg">
            <h2 className="text-[20px] font-bold">{item.userName}</h2>
            <p>{item.todoTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
