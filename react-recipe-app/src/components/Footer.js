import React from "react";
import "../style/footer.css";
import "antd/dist/antd.css";
import { Space, Typography } from "antd";

const Footer = () => {
  return (
    <div style={{ width: "1400px", placeSelf: "center" }}>

      <div style={{ display: "flex", justifyContent: "space-between" }}>

        <div className="footer-info" style={{ width: "900px" }}>
          <div></div>
          <div className="footer-info__returns">
            Computer Engineer Merve Öztürk
          </div>
          <div>
            Returns Policy
          </div>
          <div>
            Delivery
          </div>
        </div>


        <div className="footer-info" style={{ width: "900px" }}>
          <div className="footer-social-media" >

          </div>
          <div className="footer-info__email">
            merveoztrk94@gmail.com
          </div>
          <div className="footer-info__terms">
            Terms and Conditions
          </div>
          <div>Copyright</div>
        </div>

        <div className="footer-info" style={{ width: "200px" }}>

          <div className="footer-info__contact">
            +90
          </div>
          <div>
            My Story
          </div>
          <div>
            Contact Us
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;
