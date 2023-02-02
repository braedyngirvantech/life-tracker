import './Tracker.css';
import PurchaseTracker from './trackers/PurchaseTracker.js';
import FoodTracker from './trackers/FoodTracker.js';
import DebtTracker from './trackers/DebtTracker.js';
import AssetTracker from './trackers/AssetTracker.js';
import HygieneTracker from './trackers/HygieneTracker.js';
import LendingTracker from './trackers/LendingTracker.js';

export default function Tracker(props){
    switch (props.selection){
        case  'purchase': return <PurchaseTracker/>;
        case  'food': return <FoodTracker/>;
        case  'debt': return <DebtTracker/>;
        case  'hygiene': return <HygieneTracker/>;
        case  'lending': return <LendingTracker/>;
        case  'asset': return <AssetTracker/>;
        default: return <PurchaseTracker/>;
    }
}