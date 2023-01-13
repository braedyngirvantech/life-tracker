import './App.css';
import Toolbar from './Toolbar.js';
import PurchaseTracker from './pages/PurchaseTracker';
import Tracker from './Tracker';

function App() {
  return (
    <div className="App">
      <Toolbar/>
      <header className="App-header">
      </header>
      <Tracker/>
    </div>
  );
}

export default App;