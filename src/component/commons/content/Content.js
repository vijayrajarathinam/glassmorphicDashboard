import React from "react";
import Cards from "../../dashboard/cards/Cards";
import StatisticsTable from "../../dashboard/statisticsTable/StatisticsTable";
import classes from "./Content.module.css";

const Content = () => {
  return (
    <div className={classes.content}>
      <h1>Dashboard</h1>
      <Cards />
      <StatisticsTable />
    </div>
  );
};

export default Content;
