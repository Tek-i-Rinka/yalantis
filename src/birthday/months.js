import React, { useState, useEffect } from "react";
import Month from "./month";
const styles = {
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
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
function Months(props) {
  const [date, setDate] = useState(null);
  useEffect(() => {
    let month = new Date().getMonth();
    let months1 = months.slice(0, month);
    let months2 = months.slice(month, 12);
    months = months2.concat(months1);
    setDate(1);
  }, []);
  if (date === null) {
    return <h1>Loading data...</h1>;
  }
  return (
    <div style={styles.div}>
      {props.active.length > 0 ? (
        months.map((el) => {
          return (
            <Month
              month={el}
              key={el}
              active={props.active.sort(function (a, b) {
                var nameA = a.lastName.toLowerCase(),
                  nameB = b.lastName.toLowerCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
              })}
              months={months}
            />
          );
        })
      ) : (
        <div>Employees List is empty</div>
      )}
    </div>
  );
}
export default Months;
