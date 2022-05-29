import React, { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import { UilTimes } from "@iconscout/react-unicons";
import "react-circular-progressbar/dist/styles.css";
import ReactApexChart from "react-apexcharts";
import classes from "./Card.module.css";
import "./Card.css";

export default function Card({ ...props }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard {...props} setExpanded={(e) => setExpanded(false)} />
      ) : (
        <CompactCard {...props} setExpanded={(e) => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
}

function CompactCard({ png: Png, value, barValue, color, title, setExpanded }) {
  return (
    <motion.div
      onClick={setExpanded}
      layoutId="expandableCard"
      className={classes.compactCard}
      style={{ background: color.backGround, boxShadow: color.boxShadow }}
    >
      <div className={classes.radialBar}>
        <CircularProgressbar value={barValue} text={`${barValue}%`} />
        <span>{title}</span>
      </div>
      <div className={classes.detail}>
        <Png />
        <span>{value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ png: Png, series, color, setExpanded, ...props }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };
  return (
    <motion.div
      layoutId="expandableCard"
      className={classes.expandedCard}
      style={{ background: color.backGround, boxShadow: color.boxShadow }}
    >
      <div className={classes.closeIcon}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{props.title}</span>
      <div className={classes.chartContainer}>
        <ReactApexChart series={series} type="area" options={data.options} />
      </div>
      <span>Last 24 Hours</span>
    </motion.div>
  );
}
