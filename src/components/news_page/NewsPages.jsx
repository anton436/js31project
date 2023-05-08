import React from "react";
import "./NewsPages.css";
import Card from "../Card/Card";

const NewsPages = () => {
  return (
    <div className="box">
      <div className="main_box">
        <h1>NEWS</h1>
        <div className="newsroom-filter">
          <div className="newsroom-categories">
            <ul className="newsroom-categorie-list">
              <li>ALL News</li>
              <li>Corporate</li>
              <li>Product and Brand</li>
              <li>VIRTUAL PRESS CONFERENCES</li>
            </ul>
          </div>
          <div className="newsroom-filter-responsive">
            <select
              name=""
              id="newsroom-years-res"
              className="newsroom-categories-res"
            >
              <option value="ALL News">ALL News</option>
              <option value="Corporate">Corporate</option>
              <option value="Product and Brand">Product and Brand</option>
              <option value="VIRTUAL PRESS CONFERENCES">
                VIRTUAL PRESS CONFERENCES
              </option>
            </select>
          </div>
          {/* <div className="newsroom-search">
            <div className="search-field ">
              <input type="text" placeholder="Enter your search here..." />
              <button className="search-submit">Search</button>
            </div>
          </div> */}
          <div className="newsroom-years">
            <select
              name=""
              id="newsroom-years"
              className="newsroom-year-select"
            >
              <option value="all-years">Select a year</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2022">2021</option>
              <option value="2022">2020</option>
              <option value="2022">2021</option>
              <option value="2022">2019</option>
              <option value="2022">2018</option>
              <option value="2022">2019</option>
            </select>
            <img
              src="../../img/icons8-less-than-50.png"
              alt=""
              className="img-arrow"
            />
          </div>
        </div>
        <div className="newsroom-tags-container ">
          <ul className="newsroom-tag-list hide-corporate">
            <li className="tag-item">Finance</li>
            <li className="tag-item">Ad-Hoc</li>
            <li className="tag-item">Corporate</li>
          </ul>
          <ul className="newsroom-tag-list hide-product">
            <li className="tag-item">Teamsport</li>
            <li className="tag-item">Sportstyle</li>
            <li className="tag-item">Running and Training</li>
            <li className="tag-item">Golf</li>
            <li className="tag-item">Basketball</li>
            <li className="tag-item">Motorsport</li>
            <li className="tag-item">Accessories and Licensing</li>
          </ul>
        </div>
      </div>
      <Card></Card>
    </div>
  );
};

export default NewsPages;
