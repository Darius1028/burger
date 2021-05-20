import React from "react";

const Footer = () => {
  return (
    <footer className="footer">

        <div className="btn-group" role="group" >
          <button type="button" className="btn">
          <div><i className="far fa-clone orange "></i></div> 
          Explorer
          </button>
          <button type="button" className="btn">
          <div><i className="far fa-bell orange "></i></div>
          Orders
          </button>
          <button type="button" className="btn">
            <div><i className="far fa-eye  orange "></i></div>
          Saved
          </button>
          <button type="button" className="btn">
              <div><i className="far fa-clock orange "></i></div>
          Profile
          </button>
        </div>

    </footer>
  );
};

export default Footer;
