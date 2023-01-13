import logo from './logo.svg';
import bankcardicon from './BankCardIcon.svg';
import burgericon from './BurgerIcon.svg';

function ToolbarIcon(props){
    switch(props.tracker){
        case 'purchase': return <img src={bankcardicon} className="toolbar-logo" alt="logo"/>;
        case 'food': return <img src={burgericon} className="toolbar-logo" alt="logo"/>;
        default: return <img src={bankcardicon} className="toolbar-logo" alt="logo"/>;
}}

export default ToolbarIcon;;