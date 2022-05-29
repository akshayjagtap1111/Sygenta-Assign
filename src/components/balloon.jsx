import React, {memo, useMemo} from "react";
import styled from "styled-components";


const Circle = styled.div`
  border: solid 1px red;
  height: 50px;
  width: 50px;
  margin: auto;
  border-radius: 100%;
`;

 function Balloon() {

 const color = useMemo(()=>{
  let r= Math.floor(Math.random() * 101);
  let g =Math.floor(Math.random() * 101);
  let b =Math.floor(Math.random() * 101)


  const back_color =`rgb(${r},${g},${b})`
  console.log(back_color)
  return back_color
 },[])

  return <Circle style={{"backgroundColor":color}}>

  </Circle>
}

export default memo(Balloon)