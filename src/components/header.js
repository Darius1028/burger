import React from "react";

const Header = () => {
  return (
    <header className="container">
      <div>
        <h1>Explorer</h1>
      </div>
      <div>Hi Ricardo, Welcome!</div>

        <div class="wrapp-btn   " role="group">
          <button type="button" className="btn btn-primary one">
          Delivery
          </button>
          <button type="button" className="btn btn-primary two">
          Pick up
          </button>
        </div>

    </header>
  );
};

export default Header;
