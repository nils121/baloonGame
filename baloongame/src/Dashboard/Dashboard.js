import React, { useState } from 'react';


function Dashboard({ data }) {
    const renderBallons = () => {
        return <ul>
            {data.map((ele, idx) => {
                if (!ele.isPopped) {
                    return <li key ={idx} className='sphere' style={{ backgroundColor: `${ele.color}` }}></li>
                }
            })}
        </ul>
    }

    return (
        <div className="column">
            <h2>Dashboard</h2>
            {/* {renderBallons()} */}
            {data.map((ele, idx) => {
                return <li key ={idx} className='sphere' style={{ backgroundColor: `${ele.color}` }}></li>
            })}
        </div>
    )
}

export default Dashboard
