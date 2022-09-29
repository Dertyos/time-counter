import React from "react";

export const Counter = ({ segundos, decenas, centenas, umil, dmil, cmil }) => {
  return (
    <>
      <div className="container-fluid m-3 bg-black text-white row justify-content-center ">
        <div className="col-2 border borderwidth-1px-gray ">
          <i className="far fa-clock"></i>
        </div>
        <div className="col-1 border borderwidth-1px-gray p-4 text-alig-center">
          {cmil}
        </div>
        <div className="col-1 border borderwidth-1px-gray p-4 text-alig-center">
          {umil}
        </div>
        <div className="col-1 border borderwidth-1px-gray p-4 text-alig-center">
          {centenas}
        </div>
        <div className="col-1 border borderwidth-1px-gray p-4 text-alig-center">
          {decenas}
        </div>
        <div className="col-1 border borderwidth-1px-gray p-4 text-alig-center">
          {segundos}
        </div>
      </div>
      <div><button type="button" onClick={}></button></div>
    </>
  );
};
