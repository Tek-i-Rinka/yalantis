import React from "react";
import Letter from "./letter";
let arr_EN = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const styles = {
  alph: {
    display: "flex",
    flexWrap: "wrap",
    width: "103%",
  },
};
function Alph(props) {
  return (
    <div style={styles.alph}>
      {arr_EN.map((el) => {
        let sortArr = [];
        props.data.map((item) => {
          if (item.firstName[0] == el) {
            sortArr.push(item);
          }
        });
        return (
          <Letter
            coo={props.coo}
            style={styles.letter}
            cookies={props.cookies}
            setCookie={props.setCookie}
            removeCookie={props.removeCookie}
            key={el}
            letter={el}
            active={props.active}
            setActive={props.setActive}
            users={sortArr.sort(function (a, b) {
              var nameA = a.firstName.toLowerCase(),
                nameB = b.firstName.toLowerCase();
              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
              return 0;
            })}
          />
        );
      })}
    </div>
  );
}
export default Alph;
