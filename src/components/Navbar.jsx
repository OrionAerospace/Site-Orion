export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="navbar-logo">
        <span>⊙ ORION</span>
      </div>

      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#areas">Áreas</a></li>
        <li><a href="#conquistas">Conquistas</a></li>
        <li><a href="#processo">Processo Seletivo</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <button className="navbar-cta">Junte-se a nós</button>
    </nav>
  )
}