import React from "react";
import "./Footer.css";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Insta from "../../assets/instagram.svg";
import Pinterest from "../../assets/pinterest.svg";
import Youtube from "../../assets/youtube.svg";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer__top">
          <div className="div1">
            <div className="div_foot1">
              <span>Support</span>
              <hr />
              <a href="#">Contact us</a>
              <a href="#">FAQ</a>
              <a href="#">Check Gift Card balance</a>
              <a href="#">Purchase a Gift Card</a>
              <a href="#">Check Order</a>
              <a href="#">Delivery</a>
              <a href="#">Find a Store</a>
              <a href="#">Size Guide</a>
            </div>
            <div className="div_foot2">
              <a href="#">Return Policy</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Right of Withdrawal</a>
              <a href="#">*Promotions & Sale</a>
              <a href="#">Student Discount</a>
              <a href="#">Refer A Friend</a>
              <a href="#">Become an Affiliate Partner</a>
            </div>
          </div>
          <div className="div2">
            <div className="div_foot3">
              <span>About PUMA</span>
              <hr />
              <a href="#">Company</a>
              <a href="#">Corporate News</a>
              <a href="#">Press Center</a>
            </div>
            <div className="div_foot4">
              <a href="#">Investors</a>
              <a href="#">Sustainability</a>
              <a href="#">Careers</a>
            </div>
          </div>
          <div className="div3">
            <div className="div__foot5">
              <span>Sign up and get 20% off your first order</span>
              <button className="btn1">Sign up for newsletter</button>
            </div>
            <div className="div_foot6">
              <span>More Inspiration</span>
              <hr />
              <div className="icons">
                <a target="_blank" href="#">
                  {" "}
                  <img style={{ width: "25px" }} src={Facebook} alt="" />{" "}
                </a>
                <a target="_blank" href="#">
                  {" "}
                  <img style={{ width: "25px" }} src={Twitter} alt="" />
                </a>
                <a target="_blank" href="#">
                  {" "}
                  <img style={{ width: "25px" }} src={Insta} alt="" />
                </a>
                <a target="_blank" href="#">
                  {" "}
                  <img style={{ width: "25px" }} src={Pinterest} alt="" />
                </a>
                <a target="_blank" href="#">
                  {" "}
                  <img style={{ width: "25px" }} src={Youtube} alt="" />
                </a>
              </div>
            </div>
            <hr />
            <div className="div7">
              <img
                className="p-footer-featured-icon"
                src="https://eu.puma.com/on/demandware.static/-/Library-Sites-Shared-EEA/default/dw84ec825e/web-components/pumatrac-logo.svg"
                alt="puma-trac"
              ></img>
              <span id="span">Train with the fastest</span>
            </div>
          </div>
        </div>

        <div className="div8">
          <select className="cars" id="cars">
            <option value="English">English</option>
            <option value="Germany">Germany</option>
            <option value="Kyrgyz">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <p className="text1">© PUMA Europe GmbH, 2023. All Rights Reserved</p>
          <div className="link__block">
            <a className="text2">Cookies Settings</a>
            <span className="text3">Imprint & Legal Data</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
