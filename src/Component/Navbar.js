import React from "react";
import styles from "./Main.module.css"
function Navbar() {
  return (
    <div className={styles.nav}>
      {" "}
      <h3>hello Mr/mi</h3>
      <input
        type="search"
        className={styles.input}
        style={{ marginRight: "50px", borderRadius: "10px", height: "30px" }}
        placeholder="search"
      />
    </div>
  );
}

export default Navbar;
