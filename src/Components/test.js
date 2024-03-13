import React, { useState } from "react";
import Child from "./test2";


export default function Test() {
    const [uiColor, setUiColor] = useState(null);
  
    const getColor = (color) => {
      setUiColor(color);
    };
  
    return (
      <>
        <div className="test">
          <div className="aaa" style={{ background: { uiColor } }}></div>
        </div>
        <Child getColor={getColor} />
      </>
    );
  }
  

