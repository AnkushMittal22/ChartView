import React from "react";
import styles from "./Main.module.css"
import {FaSlidersH} from "react-icons/fa"
function Aside() {
  return (
    <div className={styles.side}>
<div className={styles.slide}>
  <FaSlidersH/>
</div>
<div>
      <h2>Dashboard</h2>
      <div className={styles.item}>
        <p>Dashboard</p>
        <p>
          product
          <span> &rsaquo;</span>
        </p>
        <p>
          Custmeors
          <span> &rsaquo;</span>
        </p>
        <p>
          Income
          <span> &rsaquo;</span>
        </p>
        <p>
          Promote
          <span> &rsaquo;</span>
        </p>
        <p>
          Help
          <span>&rsaquo;</span>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Aside;
