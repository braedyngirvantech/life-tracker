import logo from './logo.svg';
import './Toolbar.css';

function Toolbar(){
    return <div className='toolBar'>
        <img src={logo} className="toolbar-logo" alt="logo" href='/PurchaseTracker.js'/>
        <a href="/PurchaseTracker.js">Purchase Tracker</a>
        <a>Food Tracker</a>
        <button>Hygiene Tracker</button>
        <button>Debt Tracker</button>
        <button>Lending Tracker</button>
    </div>;
}

export default Toolbar;