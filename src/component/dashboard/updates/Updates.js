import React from "react";
import { update as updateData } from "../../../data";
import classes from "./Updates.module.css";

const Updates = () => {
  return (
    <div className={classes.updates}>
      {updateData.map((update, id) => (
        <div key={id} className={classes.update}>
          <img src={update.img} alt={update.name} />
          <div className={classes.noti}>
            <div>
              <span>{update.name}</span>
              <soan>{update.noti}</soan>
            </div>
            <span>{update.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Updates;
