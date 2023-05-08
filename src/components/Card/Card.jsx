import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Card.css";

const API = "http://localhost:8003/card";

const Card = () => {
  const [cards, setCards] = useState([]);
  console.log(cards);

  const getCard = async () => {
    try {
      const response = await axios.get(API);
      setCards(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCard();
  }, []);

  return (
    <div className="main_card-box">
      <div className="card_container">
        {cards.map((item) => (
          <div className="card " key={item.id}>
            <img
              className="img_from_cardjson"
              src={item.image}
              alt={item.title}
            />
            <div className="date">{item.date}</div>
            <div className="title">{item.title}</div>
          </div>
        ))}
      </div>
      <button className="btn_news">LOAD MORE</button>
    </div>
  );
};

export default Card;
