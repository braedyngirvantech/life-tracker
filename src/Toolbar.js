import './Toolbar.css';
import ToolbarIcon from './ToolbarIcon';

function Toolbar(props){
    return <div className='toolBar'>
        <ToolbarIcon tracker={props.currentTracker}/>
        <select onChange={(event) => props.chooseTracker(event.currentTarget.value)}>
            <option value='purchase'>Purchase Tracker</option>
            <option value='food'>Food Tracker</option>
            <option value='hygiene'>Hygiene Tracker</option>
            <option value='debt'>Debt Tracker</option>
            <option value='lending'>Lending Tracker</option>
        </select>
    </div>;
}
    


export default Toolbar;