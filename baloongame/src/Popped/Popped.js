import React, { useState } from 'react'

function Popped({ data, getClickedInfo }) {

  const renderBallons = () => {
    return (
      <ul>
        {data.map((ele, idx) => {
          if (ele.isPopped) {
            return (
              <li
                key={idx}
                className="sphere"
                style={{ backgroundColor: `${ele.color}` }}
              ></li>
            );
          }
        })}
      </ul>
    );
  };

  const onClickedCircle = (ele, indx) => {
    getClickedInfo(ele, indx);
  }

  return (
    <div className="column">
      <h2>Popped</h2>
      {/* {renderBallons()} */}
      {data.map((ele, idx) => {
        return <li key ={idx} className='sphere' onClick={_ => onClickedCircle(ele, idx)} style={{ backgroundColor: `${ele.color}` }}></li>
      })}
    </div>
  );
}

export default Popped
