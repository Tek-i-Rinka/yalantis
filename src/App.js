import React, { useState, useEffect } from "react";
import "./App.css";
import Alph from "./alphabet/alph";
import Birthday from "./birthday/birth";
import { useCookies } from "react-cookie";

const styles = {
  div: {
    display: "flex",
    justifyContent: "space-between",
  },
};
const url = "https://yalantis-react-school-api.yalantis.com/api/task0/users";
function App() {
  const [data, setData] = useState(null);
  const [active, setActive] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies();
  var activeListFromCookies = document.cookie.split("; ");
  for (let i = 0; i < active.length; i++) {
    if (active[i] == null) {
      active.splice(i, 1);
    }
  }
  function findActive(key, arr) {
    var array = [];
    arr.map((el) => {
      if (el.id + "=" == key) {
        array.push(el);
        setActive((prevState) => [...prevState, el]);
        return el;
      }
    });
    return undefined;
  }
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((d) => {
        setData(d);
        activeListFromCookies.map((el) => {
          findActive(el, d);
        });
      });
  }, []);

  if (data === null) {
    return <h1>Loading data...</h1>;
  }
  return (
    <div style={styles.div}>
      <Alph
        coo={activeListFromCookies}
        data={data}
        active={active}
        setActive={setActive}
        cookies={cookies}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />
      <Birthday
        active={active}
        cookies={cookies}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />
    </div>
  );
}

export default App;
