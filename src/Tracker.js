import './Tracker.css';
import PurchaseTracker from './pages/PurchaseTracker';
import FoodTracker from './pages/FoodTracker';

function Tracker(props){
    switch (props.selection){
        case  'purchase':
        return <PurchaseTracker/>;
        case  'food':
        return <FoodTracker/>;
    }
}

export default Tracker;