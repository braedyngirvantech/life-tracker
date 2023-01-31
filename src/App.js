import './App.css';
import Toolbar from './Toolbar.js';
import Tracker from './pages/Tracker.js';
import { useState } from 'react';

export default function App() {
  const [trackerSelection, setTrackerSelection] = useState("purchase");
  const updateTrackerSelection = (newSelection) => {
    setTrackerSelection(newSelection);
  } 

  return (
    <div className="App">
      <Toolbar currentTracker={trackerSelection} chooseTracker={updateTrackerSelection}/>
      <Tracker selection={trackerSelection}/>
    </div>
  );
}