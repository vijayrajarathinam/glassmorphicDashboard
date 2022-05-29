import React from "react";
import classes from "./Cards.module.css";
import { cards as cardsData } from "../../../data";
import Card from "../card/Card";

const Cards = () => {
  return (
    <div className={classes.cards}>
      {cardsData.map((card, id) => {
        return (
          <div key={id} className={classes.parentContainer}>
            <Card {...card} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
