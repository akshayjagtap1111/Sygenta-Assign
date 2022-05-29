import logo from "./logo.svg";
import "./App.css";
import Balloon from "./components/balloon";
import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstfill, push, regain } from "./redux/action";


function App() {
  const color = useCallback(() => {
    let r = Math.floor(Math.random() * 101);
    let g = Math.floor(Math.random() * 101);
    let b = Math.floor(Math.random() * 101);

    const back_color = `rgb(${r + Math.random() * 101},${
      g + Math.random() * 101
    },${b + Math.random() * 101})`;

    return back_color;
  });

  const makeArr = (n) => {
    let resArr = [];
    for (let i = 0; i < n; i++) {
      let obj = {
        id: i,
        color: color(),
      };
      resArr.push(obj);
    }
    return resArr;
  };

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(firstfill(makeArr(5)));
  }, []);

  const reduxstate = useSelector((state) => state);

  console.log(reduxstate);

  /////////////////////////////////////////////////

  const [id,setid] = useState("")

  const handlechange =(e)=>{
     setid(e.target.value)
  }

  const handleAdd =()=>{
   dispatch(push(id))
  }

  const handlRemove =(el)=>{
    dispatch(regain(el))
  }

  return (
    <div className="App">
      <div id="sub">
      <div>
      {reduxstate.firstArr.map((el,i) => (
        <div key={i}>
          <Balloon color={el.color} />
        </div>
      ))}
      </div>
      <hr></hr>

      <div>
      {reduxstate.secondArr.map((el,i) => (
        <div key={i} onClick={()=>{handlRemove(el)}} >
          {" "}
          <Balloon color={el.color} />{" "}
        </div>
      ))}
      </div>
      </div>
      <input type="number" onChange={handlechange} value={id}/> 
      <button onClick={handleAdd} > SHOOT</button>
    </div>
  );
}

export default App;
