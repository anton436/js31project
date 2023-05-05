import * as React from "react";

export default function ProductSmallCard({ item }) {
  console.log(item);
  return (
    <div>
      <div style={{ maxWidth: "310px", position: "relative" }}>
        <img
          src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/390934/01/sv01/fnd/EEA/fmt/png/SUNP%C5%8C-RS-Trck-Sneakers-Women"
          alt=""
          width={310}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>1 color</p>
          <img
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_350,h_350/global/390934/01/sv01/fnd/EEA/fmt/png/SUNP%C5%8C-RS-Trck-Sneakers-Women"
            alt=""
            width={70}
            className="image"
          />
          <span
            style={{
              height: "50px",
              position: "absolute",
              top: "30%",
              right: "5px",
            }}
          >
            <i class="fa-solid fa-arrow-right"></i>
          </span>
          <span
            style={{
              height: "50px",
              position: "absolute",
              top: "30%",
              left: "5px",
            }}
          >
            <i class="fa-solid fa-arrow-left"></i>
          </span>
        </div>
        <div style={{ margin: "5em 0" }}>
          <span style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>Puma Sneakers Women</h4>
            <h4>139.5 $</h4>
          </span>
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "-5px",
              padding: "0.3em 1em",
              backgroundColor: "black",
              color: "white",
            }}
          >
            new
          </span>
        </div>
      </div>
    </div>
  );
}
