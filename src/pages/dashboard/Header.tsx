import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">e-Speech</div>
      <nav className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="../Downloads/formatted%20(4).html">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="profile">
        <img src="https://via.placeholder.com/50x50" alt="Profile Picture" />
        <span>*****</span>
      </div>
    </header>
  );
};

export default Header;
