// app/page.js or app/page.tsx
import React from "react";

async function fetchData() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return data;
}

export default async function Page() {
  const products = await fetchData();
  console.log(products);

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      {products.map((product: any) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img
            src={product.image}
            alt={product.title}
            width={100}
            height={100}
          />
          <p>{product.price} USD</p>
        </div>
      ))}
    </div>
  );
}
