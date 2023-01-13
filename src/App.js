import './App.css';
import Toolbar from './Toolbar.js';
import Tracker from './Tracker';
import { useState } from 'react';

function App() {
  const [trackerSelection, setTrackerSelection] = useState("purchase");
  const updateTrackerSelection = (newSelection) => {
    setTrackerSelection(newSelection);
  } 

  return (
    <div className="App">
      <Toolbar selection={updateTrackerSelection}/>
      <Tracker selection={trackerSelection}/>
    </div>
  );
}

export default App;