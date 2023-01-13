import logo from './logo.svg';
import bankcardicon from './BankCardIcon.svg';
import './Toolbar.css';
import { getValue } from '@testing-library/user-event/dist/utils';

function Toolbar(props){
    return <div className='toolBar'>
        <img src={bankcardicon} className="toolbar-logo" alt="logo"/>
        <select onChange={(event) => props.selection(event.currentTarget.value)}>
            <option value='purchase'>Purchase Tracker</option>
            <option value='food'>Food Tracker</option>
            <option value='hygiene'>Hygiene Tracker</option>
            <option value='debt'>Debt Tracker</option>
            <option value='lending'>Lending Tracker</option>
        </select>
    </div>;
}
    


export default Toolbar;