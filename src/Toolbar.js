import logo from './logo.svg';
import './Toolbar.css';

function Toolbar(){
    return <div className='toolBar'>
        <img src={logo} className="toolbar-logo" alt="logo" href='/PurchaseTracker.js'/>
        <ul>
        <li><a className="a" href="/PurchaseTracker.js">Purchase Tracker</a></li>
        <li><a className="a" >Food Tracker</a></li>
        <li><a className="a" >Hygiene Tracker</a></li>
        <li><a className="a">Debt Tracker</a></li>
        <li><a className="a">Lending Tracker</a></li>
        </ul>
    </div>;
}

export default Toolbar;