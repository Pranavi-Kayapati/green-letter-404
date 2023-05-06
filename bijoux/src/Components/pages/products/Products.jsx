import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const getProducts = (page) => {
    axios
      .get(`http://localhost:8080/products?_limit=8&page=${page}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handlePage = (value) => {
    setPage(page + value);
    console.log(page);
  };

  useEffect(() => {
    getProducts(page);
  }, [page]);

  return (
    <div>
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
          <h1>Filters & Sorting</h1>
          <select
            name=""
            id=""
            style={{
              width: "90%",
              padding: "8px",
              border: "1px solid rgb(164, 164, 164)",
              margin: "5px",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            <option value="">Sort by Price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
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
      <div>
        <button
          style={{
            width: "100px",
            border: "1px solid rgb(164, 164, 164)",
            padding: "5px",
            borderRadius: "5px",
          }}
          onClick={() => handlePage(-1)}
        >
          {" "}
          Prev{" "}
        </button>
        <button
          style={{
            width: "70px",
            border: "1px solid rgb(164, 164, 164)",
            padding: "5px",
            borderRadius: "5px",
            margin: "10px",
          }}
        >
          {page}
        </button>
        <button
          style={{
            width: "100px",
            border: "1px solid rgb(164, 164, 164)",
            padding: "5px",
            borderRadius: "5px",
          }}
          onClick={() => handlePage(1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
