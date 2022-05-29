import logo from "./logo.svg";
import "./App.css";
import Balloon from "./components/balloon";
import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstfill, push, regain } from "./redux/action";
import { useRandomColor } from "./utils/randomcolor";

function App() {
  const rancolorArr = useRandomColor(5);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(firstfill(rancolorArr));
  }, []);

  const reduxstate = useSelector((state) => state);

  /////////////////////////////////////////////////

  const [id, setid] = useState("");

  const handlechange = (e) => {
    setid(e.target.value);
  };

  const handleAdd = () => {
    dispatch(push(id));
  };

  const handlRemove = (el) => {
    dispatch(regain(el));
  };

  return (
    <div className="App">
      <div id="sub">
        <div className="sec_sub">
          {reduxstate.secondArr.map((el, i) => (
            <div
              key={i}
              onClick={() => {
                handlRemove(el);
              }}
            >
              {" "}
              <Balloon color={el.color} />{" "}
            </div>
          ))}
        </div>
    
        <div>
          {reduxstate.firstArr.map((el, i) => (
            <div key={i}>
              <Balloon color={el.color}/>
            </div>
          ))}
        </div>
      </div>
      <input type="number" onChange={handlechange} value={id} />
      <button onClick={handleAdd}> SHOOT</button>
    </div>
  );
}

export default App;
