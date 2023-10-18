import React from "react";

function Pie() {
  const data = [
    {
      height: 10,
      name: "jan",
    },
    {
      height: 20,
      name: "fab",
    },
    {
      height: 20,
      name: "mar",
    },
    {
      height: 20,
      name: "apr",
    },
    {
      height: 20,
      name: "may",
    },
    {
      height: 20,
      name: "june",
    },
    {
      height: 20,
      name: "july",
    },
    {
      height: 20,
      name: "augu",
    },
    {
      height: 20,
      name: "sep",
    },
    {
      height: 20,
      name: "oct",
    },
    {
      height: 20,
      name: "nov",
    },
    {
      height: 20,
      name: "dec",
    },
  ];
  return (
    <>
      {data.map((el, key) => (
        <table>
          <tbody>
            <tr >
              <td
              style={{ height: `${el.height}px`, backgroundColor: "aqua" }}></td>
            </tr>
          </tbody>
          <thead>
            <tr><th>{el.name}</th></tr>
          </thead>
        </table>
      ))}
    </>
  );
}

export default Pie;
