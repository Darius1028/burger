import React from "react";

const Footer = () => {
  return (
    <footer class="footer">

        <div class="btn-group" role="group" >
          <button type="button" class="btn">
          <div><i class="far fa-clone orange "></i></div> 
          Explorer
          </button>
          <button type="button" class="btn">
          <div><i class="far fa-bell orange "></i></div>
          Orders
          </button>
          <button type="button" class="btn">
            <div><i class="far fa-eye  orange "></i></div>
          Saved
          </button>
          <button type="button" class="btn">
              <div><i class="far fa-clock orange "></i></div>
          Profile
          </button>
        </div>

    </footer>
  );
};

export default Footer;
