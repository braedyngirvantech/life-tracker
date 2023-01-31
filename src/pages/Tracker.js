import './Tracker.css';
import PurchaseTracker from './trackers/PurchaseTracker.js';
import FoodTracker from './trackers/FoodTracker.js';

export default function Tracker(props){
    switch (props.selection){
        case  'purchase': return <PurchaseTracker/>;
        case  'food': return <FoodTracker/>;
        default: return <PurchaseTracker/>;
    }
}