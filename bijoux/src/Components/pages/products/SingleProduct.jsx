import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
export default function SingleProduct() {
  const toast = useToast();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProductData = () => {
    axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  };

  const hadleAddToFav = () => {
    axios
      .post("http://localhost:8080/favorites", { ...product })
      .then(function (response) {
        console.log(response);
        toast({
          title: "Product Added to Favorites",
          description: "Please check the Favorite page to see the products.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch(function (error) {
        console.log(error);
        toast({
          title: "Product Already in Favorites",
          description: "",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  const hadleAddToCart = () => {
    axios
      .post("http://localhost:8080/cart", { ...product })
      .then(function (response) {
        console.log(response);
        toast({
          title: "Product Added to Cart",
          description: "Please check the Cart page to see the products.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch(function (error) {
        console.log(error);
        toast({
          title: "Product Already in Cart",
          description: "",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
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
          justifyContent: "center",
          margin: "30px",
          color: "#696b66",
        }}
      >
        <div style={{ width: "40%" }}>
          <img src={product.image_url} alt={product.name} width="80%" />
        </div>
        <div
          style={{
            width: "50%",
            border: "1px solid rgb(164, 164, 164)",
            textAlign: "left",
            height: "40%",
            padding: "30px",
            // display: "flex",
            // flexDirection: "column",
            // alignContent: "space-evenly",
            // justifyContent: "space-evenly",
          }}
        >
          <h1 style={{ fontSize: "25px", padding: "10px" }}>
            BijouX Product Details
          </h1>
          <h1>{product.name}</h1>
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
              onClick={hadleAddToCart}
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
              onClick={hadleAddToFav}
            >
              ADD TO FAVOURITE
            </button>
          </div>
          <div>
            <h1 style={{ fontSize: "25px", textAlign: "center" }}>
              User Reviews
            </h1>
            {product?.reviews?.map((review) => {
              return (
                <div
                  key={review.user}
                  style={{
                    border: "1px solid rgb(164, 164, 164)",
                    padding: "10px",
                  }}
                >
                  <h4>User: {review.user}</h4>
                  <p>Rating: {review.rating}</p>
                  <p>Comment: {review.comment}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
