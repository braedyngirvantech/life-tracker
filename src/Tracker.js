import './Tracker.css';
import PurchaseTracker from './pages/PurchaseTracker';

function Tracker(props){
    if (props.selection == 'purchase'){
        return <PurchaseTracker/>;
    }
}

export default Tracker;