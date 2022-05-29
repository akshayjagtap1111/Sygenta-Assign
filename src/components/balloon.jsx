import React, {memo, useMemo} from "react";
import styled from "styled-components";


const Circle = styled.div`
  border: solid 1px red;
  height: 50px;
  width: 50px;
  margin: auto;
  border-radius: 100%;
  margin-bottom: 10px;
  margin-left: 10px;
`;

 function Balloon(props) {



  return <Circle style={{"backgroundColor":props.color}}>

  </Circle>
}

export default memo(Balloon)