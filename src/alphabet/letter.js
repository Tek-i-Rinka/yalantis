import React, { useState, useEffect, useContext } from "react";
const styles = {
  letter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    margin: "20px 10px 0 10px",
    border: "solid #ccc 2px",
    borderRadius: "10px",
    width: "400px",
    marginRight: "10px",
  },
  hr: {
    width: "60%",
    backgroundColor: "#ccc",
  },
  userList: {
    width: "65%",
  },
  p: {
    display: "flex",
    justifyContent: "space-between",
    margin: "8px 0",
    padding: "8px 8px",
    borderRadius: "4px",
    backgroundColor: "white",
  },
  active: {
    display: "flex",
    justifyContent: "space-between",
    margin: "8px 0",
    padding: "8px 8px",
    borderRadius: "4px",
    backgroundColor: "white",
    backgroundColor: "rgb(179 235 255 / 72%)",
  },
};
function Employee(props) {
  const [state, setState] = useState(props.state);
  function handleChange(event) {
    if (event.target.value === "on") {
      event.target.parentElement.parentElement.style.cssText +=
        "background-color: rgb(179 235 255 / 72%);";
    } else if (event.target.value === "off") {
      event.target.parentElement.parentElement.style.removeProperty(
        "background-color"
      );
    }
    let ind = props.active.indexOf(props.empl);
    if (ind != -1) {
      props.active.splice(ind, 1);
      props.setActive((prevState) => [...prevState, null]);
      props.removeCookie(event.target.name);
    } else {
      props.setActive((prevState) => [...prevState, props.empl]);
      props.setCookie(event.target.name, "");
    }
    setState(event.target.value);
  }
  return state == "off" ? (
    <div style={styles.p}>
      <span>
        {props.empl.firstName} {props.empl.lastName}
      </span>
      <div>
        <input
          type="radio"
          name={props.empl.id}
          value="off"
          onChange={handleChange}
          checked={state === "off"}
        />
        <input
          type="radio"
          name={props.empl.id}
          value="on"
          onChange={handleChange}
          checked={state === "on"}
        />
      </div>
    </div>
  ) : (
    <div style={styles.active}>
      <span>
        {props.empl.firstName} {props.empl.lastName}
      </span>
      <div>
        <input
          type="radio"
          name={props.empl.id}
          value="off"
          onChange={handleChange}
          checked={state === "off"}
        />
        <input
          type="radio"
          name={props.empl.id}
          value="on"
          onChange={handleChange}
          checked={state === "on"}
        />
      </div>
    </div>
  );
}
function Letter(props) {
  return (
    <div style={styles.letter}>
      <h2>{props.letter}</h2>
      <hr style={styles.hr}></hr>

      {props.users.length ? (
        <div style={styles.userList}>
          {props.users.map((employee) => {
            var state = "off";
            props.coo.map((el) => {
              if (el == employee.id + "=") {
                state = "on";
              }
            });
            return (
              <Employee
                state={state}
                cookies={props.cookies}
                setCookie={props.setCookie}
                removeCookie={props.removeCookie}
                empl={employee}
                active={props.active}
                setActive={props.setActive}
                key={employee.id}
              />
            );
          })}
        </div>
      ) : (
        <p>No employees</p>
      )}
    </div>
  );
}
export default Letter;
