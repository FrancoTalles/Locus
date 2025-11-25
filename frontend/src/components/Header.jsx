import "../css/main.css";
import logoHeader from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-area">
        <img src={logoHeader} alt="Locus Logo" className="header-logo" />
        <span className="header-title">Locus</span>
      </div>

      <nav className="header-menu">
        <a href="/login">Login</a>
        <a href="/feed">Feed</a>
      </nav>
    </header>
  );
}

export default Header;
