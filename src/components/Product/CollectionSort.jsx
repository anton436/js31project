import React from "react";
import icons from "@mui/icons-material/ExpandMore";
import "../styles/CollectionSort.css";

const CollectionSort = () => {
  return (
    <div>
      <div className="container">
        <div>
          <h3 style={{ fontSize: "2rem" }}>COLLECTIONS</h3>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="sortFlex">
          <div className="leftSide">
            <div className="sortIcon">
              <i class="fa-solid fa-sliders" style={{ color: "#000000" }}></i>
            </div>
            <button className="sortButtons">
              Price{" "}
              <div className="btnIcon">
                <i
                  class="fa-solid fa-angle-down"
                  style={{ color: "#000000" }}
                ></i>
              </div>
            </button>
            <button className="sortButtons">
              Collection{" "}
              <div className="btnIcon">
                <i
                  class="fa-solid fa-angle-down"
                  style={{ color: "#000000" }}
                ></i>
              </div>
            </button>
            <button className="sortButtons">
              Size{" "}
              <div className="btnIcon">
                <i
                  class="fa-solid fa-angle-down"
                  style={{ color: "#000000" }}
                ></i>
              </div>
            </button>
            <button className="sortButtons">
              Age{" "}
              <div className="btnIcon">
                <i
                  class="fa-solid fa-angle-down"
                  style={{ color: "#000000" }}
                ></i>
              </div>
            </button>
            <button className="sortButtons">
              Product Category{" "}
              <div className="btnIcon">
                <i
                  class="fa-solid fa-angle-down"
                  style={{ color: "#000000" }}
                ></i>
              </div>
            </button>
            <button className="sortButtons">
              Colour{" "}
              <div className="btnIcon">
                <i
                  class="fa-solid fa-angle-down"
                  style={{ color: "#000000" }}
                ></i>
              </div>
            </button>
            <div className="moreBtn">
              MORE FILTERS <span>+</span>
            </div>
          </div>
          <div className="rightSide">
            <select name="" id="">
              <option value="">Top Sellers</option>
              <option value="">New Arrivals</option>
              <option value="">Price Low To High</option>
              <option value="">Price High To Low</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CollectionSort;
