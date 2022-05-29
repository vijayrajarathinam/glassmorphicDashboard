import React from "react";
import Review from "../../dashboard/review/Review";
import Updates from "../../dashboard/updates/Updates";
import classes from "./RightSide.module.css";

const RightSide = () => {
  return (
    <div className={classes.rightSide}>
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <Review />
      </div>
    </div>
  );
};

export default RightSide;
