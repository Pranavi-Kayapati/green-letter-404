import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [data, setData] = useState([]);

  const getProducts = () => {
    axios
      .get("http://localhost:8080/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        // alignItems: "center",
      }}
    >
      <div
        style={{
          width: "20%",
          border: "1px solid rgb(164, 164, 164)",
          marginTop: "45px",
        }}
      >
        <h1>Side</h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr",
          gap: "40px 20px",
          padding: "50px",
          width: "75%",
        }}
      >
        {data?.map((item) => {
          return <ProductCard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
