import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = (props) => {
    if (props.isLogged) {
        return (
            <div className='nav' style={{ textAlign: "right" }}>
                <div className="navbar-brand" style={{ display: 'inline-block' }}>Sous Vide Recipes</div>
                <ul className="navbar-nav" style={{ display: 'inline-block', listStyle: 'none', padding: 0 }}>
                    <li style={{ display: 'inline-block', marginRight: '40px', borderRadius: '20px', padding: '8px 12px', backgroundColor: 'whitesmoke' }}><Link to="/" >Home</Link></li>
                    <li style={{ display: 'inline-block', marginRight: '40px', borderRadius: '20px', padding: '8px 12px', backgroundColor: 'whitesmoke' }}><Link to="/form" >Add new item</Link></li>
                    <li style={{ display: 'inline-block', color: "blue", borderRadius: '20px', padding: '1px 12px', backgroundColor: 'whitesmoke' }}><p className="nav-link" >Logged in as {props.user}</p></li>
                    <div>
					<li style={{ display: 'inline-block', color: "#262626", borderRadius: '20px', padding: '8px 12px', backgroundColor: 'whitesmoke', marginRight: '1px' }}><Link to="/" onClick={props.logout}>Logout</Link></li>
                    </div>
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