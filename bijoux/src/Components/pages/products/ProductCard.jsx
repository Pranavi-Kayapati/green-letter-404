import { Link } from "react-router-dom";
export default function ProductCard(props) {
  console.log(props);
  const { id, name, price, image_url, category, description, reviews } = props;
  return (
    <div>
      <Link
        to={`/products/${id}`}
        style={{ textDecoration: "none", color: "#696b66" }}
      >
        <div
          style={{ border: "1px solid rgb(164, 164, 164)", height: "450px" }}
        >
          <img src={image_url} alt={name} width="100%" />
          <div style={{ padding: "10px" }}>
            <p>{category}</p>
            <h5>{name}</h5>
            <p>₹ {price}</p>
            <Link to={`/products/${id}`} style={{ color: "#696b66" }}>
              View Product
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}
