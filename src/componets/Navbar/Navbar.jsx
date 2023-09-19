import './Navbar.css';
import { NavLink } from 'react-router-dom';

export function Navbar() {

  const handleDisabledClick = (e) => {
    e.preventDefault()
  }

  return (
    <div className="nes-container is-centered navbar">
      <NavLink to={'main'} type="button" className="nes-btn is-primary navbar-element">
        Main
      </NavLink>
      <NavLink to={'tournaments'} type="button" className="nes-btn is-success navbar-element">
        Tournaments
      </NavLink>
      <NavLink to={'players'} type="button" className="nes-btn is-warning navbar-element">
        Players
      </NavLink>
      <NavLink to={'news'} type="button" className="nes-btn is-error navbar-element">
        News
      </NavLink>
      <NavLink onClick={handleDisabledClick} to={'more'} type="button" className="nes-btn is-disabled navbar-element">
        More...
      </NavLink>
      <NavLink to={'/login'} type="button" className="nes-btn navbar-element">
        Logout
      </NavLink>
    </div>
  )
}