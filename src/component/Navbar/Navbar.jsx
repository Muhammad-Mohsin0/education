import "./Navbar.css";
import logo from "../../assets/logo.png";
// import { useState } from "react";
// import { useEffect } from "react";

const menuItems = [
  { List: "Home" },
  { List: "About Us" },
  { List: "Program" },
  { List: "Campus" },
];
const Navbar = () => {
  // const [sticky, setSticky]=useState(false)
  // useEffect(() => {}, []);
  return (
    <nav className="container dark-nav">
      <img src={logo} alt="" className="logo" />
      {/* add map to li using json data */}
      <ul>
        {menuItems.map((nav, index) => (
          <li key={index}>{nav.List}</li>
        ))}
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
