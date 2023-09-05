import './Navbar.css'

export function Navbar() {
  return (
    <div className="nes-container is-centered navbar">
      <a className="nes-btn navbar-element" href="#">Home</a>
      <button type="button" href="http://localhost:5173/main" className="nes-btn is-primary navbar-element">Main</button>
      <button type="button" href="http://localhost:5173/tournaments" className="nes-btn is-success navbar-element">Tournaments</button>
      <button type="button" href="http://localhost:5173/players" className="nes-btn is-warning navbar-element">Players</button>
      <button type="button" href="http://localhost:5173/news" className="nes-btn is-error navbar-element">News</button>
      <button type="button" href="http://localhost:5173/more" className="nes-btn is-disabled navbar-element">More...</button>
      <button type="button" href="http://localhost:5173/main" className="nes-btn navbar-element">Logout</button>
    </div>
  )
}