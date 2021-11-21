import React, { useState } from "react";
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const styles = {
  month: {
    padding: "20px",
    margin: "20px 10px 0 10px",
    border: "solid #ccc 2px",
    borderRadius: "10px",
    width: "80%",
  },
  h3: {
    textAlign: "center",
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
  },
};

function Month(props) {
  if (props.active != null) {
    let date = new Date(props.active.dob);
    if (props.months[date.getMonth()] == props.month) {
      console.log(props.month);
    }
  }
  var noEmpl = true;
  return (
    <div style={styles.month}>
      <h3 style={styles.h3}>{props.month}</h3>
      <hr></hr>
      {props.active.map((el) => {
        if (el != null) {
          var date = new Date(el.dob);
          if (months[date.getMonth()] == props.month) {
            noEmpl = false;
            return (
              <div style={styles.div} key={el.id}>
                <div>
                  {el.firstName} {el.lastName}
                </div>
                <div>{date.toUTCString()}</div>
              </div>
            );
          }
        }
      })}
      {noEmpl ? <div>No employee</div> : <div></div>}
    </div>
  );
}
export default Month;
