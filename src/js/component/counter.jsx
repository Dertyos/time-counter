import React from "react";

export const Counter = ({ parar, segundos, decenas, centenas, umil, dmil, cmil }) => {
  
  

  return (
    <>
      <div id="boxPrincipal">
        <div className="box ">
          <i className="far fa-clock"></i>
        </div>
        <div className="box ">
          {cmil}
        </div>
        <div className="box ">
          {umil}
        </div>
        <div className="box ">
          {centenas}
        </div>
        <div className="box ">
          {decenas}
        </div>
        <div className="box ">
          {segundos}
        </div>
      </div>
      <div id="boxPrincipal2"><button className="box2"type="button" onClick={parar}>Parar tiempo</button></div> 
    </>
  );
};
