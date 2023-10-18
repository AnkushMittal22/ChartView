import React from "react";
import styles from "./Main.module.css";
function Bargraph() {
  const series1 = [
    {
      x: "January",
      y: 56,
    },
    {
      x: "February",
      y: 68,
    },
    {
      x: "March",
      y: 108,
    },
    {
      x: "April",
      y: 85,
    },
    {
      x: "May",
      y: 65,
    },
    {
      x: "June",
      y: 30,
    },
    {
      x: "July",
      y: 65,
    },
    {
      x: "August",
      y: 67,
    },
    {
      x: "September",
      y: 106,
    },
    {
      x: "October",
      y: 81,
    },
    {
      x: "November",
      y: 41,
    },
    {
      x: "December",
      y: 150,
    },
  ];

  return (
    <div className={styles.chart}>
      {series1.map((item) => {
        return (
          <div
            id="one"
            className={styles.lines}
            style={{
              paddingTop: `${item.y}px`,
              width: "40px",
              height: "30px",
              backgroundColor: "#f2efff",
            }}
          >
            <span>{item.x.slice(0, 3)}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Bargraph;
