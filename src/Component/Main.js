import React from "react";
import Navbar from "./Navbar";
import Bargraph from "./Bargraph";
import style from "./Main.module.css";
import { AiOutlineDollar } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import { LuDatabaseBackup } from "react-icons/lu";
import { BsFillBucketFill } from "react-icons/bs";


function Main() {
  const data = [
    {
      name: "Earning",
      amount: "$198K",
      code: "&uarr;",
      increment: "37.8%",
      class: "green universal",
      bg: "#daffeb",
      color: "#15ad50",
      image: <AiOutlineDollar />,
    },
    {
      name: "Orders",
      amount: "$2.4K",
      code: "&uarr;",
      bg: "#e7dbff",
      color: "#ba4fff",
      increment: "2%",
      class: "blue universal",
      image: <RiPagesLine />,
    },
    {
      name: "Balence",
      amount: "$2.4K",
      code: "&uarr;",
      color: "#1462c4",
      bg: "#ccf2ff",
      increment: "2% ",
      class: "aqua universal",
      image: <LuDatabaseBackup />,
    },
    {
      name: "Total sale",
      color: "#ee6988",
      bg: "#ffb7dd",
      amount: "$89K",
      code: "&uarr;",
      increment: `11% `,
      class: "pink universal",
      image: <BsFillBucketFill />,
    },
  ];
  const arr = [
    {
      stock: "32 in Stock",
      price: "$ 45.99",
      sales: "20",
      name: "shivam",
      para: "lorem",
      image: "photo",
    },
    {
      stock: "32 in Stock",
      price: "$ 45.99",
      sales: "20",
      name: "manish",
      para: "lorem",
      image: "photo",
    },
  ];
  return (
    <div className={style.main}>
      <Navbar />
      <div className={style.roundee}>
        {data.map((el, key) => (
          <div key={key} className={style.round}>
            <p
              className={style.circle}
              style={{ color: `${el.color}`, backgroundColor: `${el.bg}` }}
            >
              {el?.image}
            </p>{" "}
            <p className={style.small}>
              <span style={{ color: "#d9d9d9", fontSize: "14px" }}>
                {el.name}
              </span>
              <span style={{ fontSize: "20px", fontWeight: "700" }}>
                {el.amount}
              </span>
              <span>
                <span style={{ color: "#51c585" }}>{el.increment}</span> this
                month
              </span>
            </p>
          </div>
        ))}
      </div>
      <div className={style.chart} style={{ marginTop: "30px" }}>
        <div className={style.table}>
          <div className={style.tableinside}>
            <p className={style.aline}>
              <span style={{ fontSize: "20px", fontWeight: "700" }}>
                Overview
              </span>
              <br />
              <span style={{ color: "#dbdbdb" }}> Monthly Earning</span>
            </p>
            <select className={style.select}>
              <option>Qurataly</option>
              <option>halfyearly</option>
            </select>
          </div>
          <Bargraph />
        </div>{" "}
        <div className="pia">
          <p className={style.aline}>
            <span style={{ fontSize: "22px", fontWeight: "700" }}>
              Customer
            </span>
            <br />
            <span
              style={{ color: "#d3d3d3", fontSize: "15px", fontWeight: "600" }}
            >
              {" "}
              Customer that buy product
            </span>
          </p>
          <div className={style.outer}>
            <div className={style.inner}>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  lineHeight: "1px",
                }}
              >
                65%
              </span>
              <br />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  lineHeight: "0px",
                  wordWrap: "wrap",
                }}
              >
                New Customers
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="tabledt"  >
        <div className="all">
          <h2>Prouct Sale</h2>
          <div>
            <input className={style.input} type="search" placeholder="search" />
            <select className={style.select}>
              <option>Last 30 day </option>
              <option>Last 15 day </option>
            </select>
          </div>
        </div>
        <table>
          <thead>
            <tr className="tablerow">
              <th className="product">Product Name </th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total sales</th>
            </tr>
          </thead>
          <hr />
          {/* <tbody>
            {arr.map((el, key) => (
              <tr key={key} className="tablerow">
                <td className="product">{el.image}</td>
                <td>{el.stock}</td>
                <td>{el.price}</td>
                <td>{el.sales}</td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
}

export default Main;
