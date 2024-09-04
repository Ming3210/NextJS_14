import React from "react";

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

export default async function Page() {
  let data: any = await fetchData();
  return (
    <div>
      <p className="text-[30px]">List of posts</p>
      <div>
        {data?.map((post: any) => (
          <div key={post.id}>
            <h2 className="text-[20px]">{post.title}</h2>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
