import React, { useState } from 'react'

function Controls(props) {
    const [val, setVal] = useState('');

    const  handleChange = (e) => {
        e.preventDefault();
        setVal(e.target.value);
    }

    const handleClick = () => {
        if (val !== '') {
            props.sendClickInfo({ position: val });
            setVal('');
        }
    }

    return (
      <div className="column">
        <h2>Controls</h2>
        <input
          className="text-input"
          name="inputBox"
          type="number"
          value={val}
          onChange={handleChange}
        />
        <button className="button" onClick={handleClick}>
          Shoot
        </button>
      </div>
    );
}

export default Controls
