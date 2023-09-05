import './Navbar.css'

export function Navbar() {
  return (
    <div className="nes-container is-centered navbar">
      <a className="nes-btn navbar-element" href="#">Home</a>
      <a type="button" href="http://localhost:5173/main" className="nes-btn is-primary navbar-element">Main</a>
      <a type="button" href="http://localhost:5173/tournaments" className="nes-btn is-success navbar-element">Tournaments</a>
      <a type="button" href="http://localhost:5173/players" className="nes-btn is-warning navbar-element">Players</a>
      <a type="button" href="http://localhost:5173/news" className="nes-btn is-error navbar-element">News</a>
      <a type="button" href="http://localhost:5173/more" className="nes-btn is-disabled navbar-element">More...</a>
      <a type="button" href="http://localhost:5173/main" className="nes-btn navbar-element">Logout</a>
    </div>
  )
}