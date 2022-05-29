import React from "react";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { sidebar, sidebar as sidebarData } from "../../../data";
import classes from "./SideBar.module.css";
import clsx from "../../../utils/clsx";
import { motion } from "framer-motion";

const sidebarVariants = {
  true: { left: "0" },
  false: { left: "-60%" },
};
const SideBar = () => {
  const [selected, setSelected] = React.useState(0);
  const [expanded, setExpanded] = React.useState(true);
  return (
    <>
      <div
        className={classes.bars}
        onClick={(e) => setExpanded(!expanded)}
        style={expanded ? { left: "60%" } : { left: "5%" }}
      >
        <UilBars />
      </div>

      <motion.div
        className={classes.SideBar}
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className={classes.logo}>
          <img src="./logo.png" alt="Logo" />
          <span>
            React<span>POS</span>
          </span>
        </div>
        {/* menu items start */}
        <div className={classes.menu}>
          {sidebarData.map(({ icon: Icon, heading }, idx) => (
            <div
              key={idx}
              className={clsx(
                classes.menuItem,
                idx == selected && classes.active
              )}
              onClick={(e) => setSelected(idx)}
            >
              <div>
                <Icon />
              </div>
              <span>{heading}</span>
            </div>
          ))}
        </div>
        {/* menu items end */}
        <div className={classes.menu}>
          <div className={classes.menuItem}>
            <div>
              <UilSignOutAlt />
            </div>
            <span>Logout</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SideBar;
