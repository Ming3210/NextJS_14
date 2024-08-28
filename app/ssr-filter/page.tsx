"use client";
// app/products/page.js
import { useState } from "react";
import axios from "axios";

async function fetchData() {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return data;
}

export default async function ProductsPage() {
  // Lấy danh sách sản phẩm từ API (SSR)
  const products = await fetchData();

  return (
    <div>
      <h1>Product List</h1>
      <PriceFilter products={products} />
    </div>
  );
}

function PriceFilter({ products }: any) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    const filtered = data.filter(
      (product: any) =>
        (!minPrice || product.price >= parseFloat(minPrice)) &&
        (!maxPrice || product.price <= parseFloat(maxPrice))
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
        <button onClick={handleFilter}>Apply Filter</button>
      </div>
      <ul>
        {filteredProducts.map((product: any) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
