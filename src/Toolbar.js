import './Toolbar.css';
import bankcardicon from './assets/BankCardIcon.svg';
import burgericon from './assets/BurgerIcon.svg';

function iconReturn(tracker){
	switch(tracker){
		case 'purchase': return bankcardicon;
		case 'food': return burgericon;
		default: return bankcardicon;
	}
}

export default function Toolbar(props){
	return (
		<div className='toolBar'>
			<img src={(iconReturn(props.currentTracker))} className="toolbar-logo" alt="logo"/>
			<select onChange={(event) => props.chooseTracker(event.currentTarget.value)}>
				<option value='purchase'>Purchase Tracker</option>
				<option value='food'>Food Tracker</option>
				<option value='hygiene'>Hygiene Tracker</option>
				<option value='debt'>Debt Tracker</option>
				<option value='lending'>Lending Tracker</option>
				<option value='property'>Property Tracker</option>
			</select>
		</div>
	);
}