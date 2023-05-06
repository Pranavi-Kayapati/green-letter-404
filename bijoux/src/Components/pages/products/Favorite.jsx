import { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

export default function Favorite() {
  const [favData, setFavData] = useState([]);
  const toast = useToast();

  const hadleAddToCart = (product) => {
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

  const getProducts = () => {
    axios
      .get("http://localhost:8080/favorites")
      .then((res) => {
        setFavData(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  function FavCard(props) {
    console.log(props);
    const { id, name, category, description, image_url, price } = props;
    return (
      <div>
        <img src={image_url} alt={name} />
        <h3>{category}</h3>
        <p>{name}</p>
        <p>{description}</p>
        <p>₹ {price}</p>
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
          onClick={() => hadleAddToCart(props)}
        >
          ADD TO CART
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Favorite Page</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {favData.map((product) => {
          return <FavCard key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
}
