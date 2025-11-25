import "../css/main.css";
import logoHeader from "../assets/logo.png";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        {/* TÍTULO */}
        <h2 className="login-title">Locus</h2>

        {/* LOGO NO MEIO */}
        <div className="login-logo-wrapper">
          <img src={logoHeader} alt="Locus Logo" className="login-logo" />
        </div>

        {/* SUBTÍTULO */}
        <p className="login-subtitle">
          Plataforma comunitária de cuidado e adoção responsável de animais.
        </p>

        {/* FORMULÁRIO */}
        <form className="login-form">
          <label>E-mail</label>
          <input type="email" placeholder="seuemail@exemplo.com" />

          <label>Senha</label>
          <input type="password" />

          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
