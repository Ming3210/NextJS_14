import React from "react";

async function fetchData() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}

export default async function Page() {
  let data = await fetchData();
  return (
    <div>
      <p>Table of Product</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product: any) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}$</td>
              <td>
                <img
                  className="w-[60px] h-full"
                  src={product.image}
                  alt={product.title}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
