import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="logo-div">
      <img
        className="logo-img"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <p className="wave-heading">Wave</p>
    </div>
    <ul className="links-div">
      <li className="li-div">
        <Link to="/" className="link-heading">
          Home
        </Link>
      </li>

      <li className="li-div">
        <Link to="/about" className="link-heading">
          About
        </Link>
      </li>

      <li className="li-div">
        <Link to="/contact" className="link-heading">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
