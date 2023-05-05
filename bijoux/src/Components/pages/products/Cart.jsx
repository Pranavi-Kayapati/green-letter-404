import { useEffect, useState } from "react";
import axios from "axios";
export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const getProducts = () => {
    axios
      .get("http://localhost:8080/cart")
      .then((res) => {
        setCartData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  function CartCard(props) {
    console.log(props);
    const { id, name, image_url, description, price, category } = props;
    return (
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          margin: "10px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div>
          <img src={image_url} alt="" width="100px" />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "centerr",
              width: "50%",
            }}
          >
            <button>-</button>
            <button>[{quantity}]</button>
            <button>+</button>
          </div>
          <button></button>
        </div>
        <div style={{ width: "35%" }}>
          <p>{category}</p>
          <p>{name}</p>
          <p>{description}</p>
          <p>₹ {price}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Cart Page</h1>
      <div>
        {cartData.length > 0 ? (
          cartData.map((product) => <CartCard {...product} />)
        ) : (
          <h1>Your cart is Empty</h1>
        )}
      </div>
      <div></div>
    </div>
  );
}
