import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Popped from './Popped/Popped';
import Controls from './Controls/Controls';
import track from './track.json'

function App() {
  const [data, setData] = useState(track);
  const [filteredData, setFilteredData] = useState([]);

  function sendClickInfo(poppedElements) {
    let poppedData = data.filter((_, index) => index === poppedElements.position - 1);
    let newFilteredData = data.filter((_, index) => index !== poppedElements.position - 1);
    setData(newFilteredData);
    setFilteredData([...filteredData, ...poppedData]);
  }

  function getClickedInfo(element, index) {
    data.splice(element.index, 0, element);
    let newFilteredData = filteredData.filter((_, idx) => idx !== index);
    setData(data);
    setFilteredData(newFilteredData);
    
  }

  return (
    <div className="App">
      <div className="row">
        <Popped data={filteredData} getClickedInfo={(item, index) => getClickedInfo(item, index) } />
        <Dashboard data={data} />
        <Controls sendClickInfo={(num) => sendClickInfo(num)} />
      </div>
    </div>
  );
}

export default App;
