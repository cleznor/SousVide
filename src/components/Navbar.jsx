import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = (props) => {
    if (props.isLogged) {
        return (
            <div className='nav' style={{ textAlign: "right" }}>
                <div className="navbar-brand" >Sous Vide Recipes</div>
                <ul className="navbar-nav" style={{ display: 'inline-block', listStyle: 'none', padding: 0 }}>
                    <li style={{ display: 'inline-block', marginRight: '10px' }}><Link to="/" className="btn btn-primary">Home</Link></li>
                    <li style={{ display: 'inline-block', marginRight: '10px' }}><Link to="/form" className="btn btn-primary">Add new item</Link></li>
                    <li style={{ display: 'inline-block', marginRight: '10px'}}><button className="btn btn-info">Logged in as {props.user}</button></li>
                    <li style={{ display: 'inline-block', marginRight: '5px'}}><button className="btn btn-danger" onClick={props.logout}>Logout</button></li>
                </ul>
            </div>
        )
    } else {
        return (
            <div className="nav">
                <div className="navbar-brand">Sous Vide Recipes</div>
            </div>
        )
    }
}

export default Navbar;