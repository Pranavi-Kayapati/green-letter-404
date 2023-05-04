import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div className="Nav-tag">
        <Link to="/products">
          <p>New Collections</p>
        </Link>
      </div>
      <div className="Navbar">
        <div className="leftNav">
          <Link to="/products">
            <p>NEW</p>
          </Link>
          <Link to="/products">
            <p>ALL JEWELRY</p>
          </Link>
          <Link to="/products">
            <p>COLLECTIONS</p>
          </Link>
        </div>
        <div className="Logo">
          <Link to="/">
            <h2>BijouX</h2>
          </Link>
          {/* <img src={bijoux} alt="logo" /> */}
        </div>
        <div className="Right">
          <h4>U</h4>
          <h4>S</h4>
          <h4>F</h4>
        </div>
      </div>
      <hr />
    </div>
  );
}
