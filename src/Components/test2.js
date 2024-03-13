import React, { useState } from "react";

export default function Child() {
    const changeColor = () => {};
    return (
      <>
        <input type="text" onChange={(e) => changeColor(e.target.value)} />
      </>
    );
  }