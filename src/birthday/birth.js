import React from "react";
import Months from "./months";
const styles = {
  birth: {
    width: "33%",
    padding: "20px",
    margin: "20px 10px 0 10px",
    border: "solid #ccc 2px",
    borderRadius: "10px",
  },
  h1: {
    textAlign: "center",
  },
};
function Birthday(props) {
  return (
    <div style={styles.birth}>
      <h1 style={styles.h1}>Employees birthday</h1>
      <hr />
      <Months active={props.active} />
    </div>
  );
}
export default Birthday;
