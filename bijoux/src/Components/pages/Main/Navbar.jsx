import { Link } from "react-router-dom";
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
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
          <Link to="/login">
            <h4>U</h4>
          </Link>
          <Link to="/products">
            <IconButton
              aria-label="Search database"
              icon={<SearchIcon />}
              style={{ background: "none" }}
            />
          </Link>
          <Link to="/favourite">
            <h4>F</h4>
          </Link>
          <Link to="/cart">
            <h4>C</h4>
          </Link>
        </div>
      </div>
      <hr />
    </div>
  );
}
