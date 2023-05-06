import React from "react";
import "../AboutUsPage/styles/SectionInfo.css";
import bgIMG from "./assets/bg-section.jpg";
const SectionInfo = () => {
  return (
    <div className="container">
      <img id="bgIMG" src={bgIMG} alt="" />
      <h2>EXPERIENCED PLAYERS</h2>
      <p>
        A success story is about more than just being at the right place <br />{" "}
        at the right time. To play in the major league, you need an <br />{" "}
        understanding for the philosophy of sports. You need to be <br />{" "}
        Forever Faster. From its beginnings as a shoe factory for <br />{" "}
        football boots to the supplier of successful athletes we are <br />{" "}
        today, PUMA has proven time and time again how its innovations <br />{" "}
        helped athletes to perform at their best.
      </p>
      <button className="section__info_btn">GO BACK IN TIME</button>
    </div>
  );
};

export default SectionInfo;
