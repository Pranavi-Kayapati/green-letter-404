import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import axios from "axios";
export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProductData = () => {
    axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "30px",
          color: "#696b66",
        }}
      >
        <div style={{ width: "40%" }}>
          <img src={product.image_url} alt={product.name} width="90%" />
        </div>
        <div
          style={{
            width: "40%",
            border: "1px solid rgb(164, 164, 164)",
            textAlign: "left",
            padding: "30px",
            // display: "flex",
            // flexDirection: "column",
            // alignContent: "space-evenly",
            // justifyContent: "space-evenly",
          }}
        >
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <h2>₹ {product.price}</h2>
          <div>
            <button
              style={{
                border: "1px solid rgb(164, 164, 164)",
                padding: "10px",
                borderRadius: "7px",
                background: "#607D8B",
                color: "white",
                width: "100%",
                margin: "10px",
              }}
            >
              ADD TO CART
            </button>
            <button
              style={{
                border: "1px solid rgb(164, 164, 164)",
                padding: "10px",
                borderRadius: "7px",
                background: "#B0BEC5",
                width: "100%",
                color: "black",
                margin: "10px",
              }}
            >
              ADD TO FAVOURITE
            </button>
          </div>
          <div>
            {product?.reviews?.map((review) => {
              return (
                <div
                  key={review.user}
                  style={{
                    border: "1px solid rgb(164, 164, 164)",
                    padding: "10px",
                  }}
                >
                  <h4>{review.user}</h4>
                  <p>Rating: {review.rating}</p>
                  <p>{review.comment}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
