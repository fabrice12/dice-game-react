import './Header.css'
import dice from '../../images/dice.png'

const Header = () => {
    return (
        <div className="header-parent">
            <img src={dice} width="140" height="140" className="dice-image"/>
            <h1>HISHAB Lucky Dice Game</h1>
        </div>
    )
}
export default Header