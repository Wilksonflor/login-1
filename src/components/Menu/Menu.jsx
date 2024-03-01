import "./Menu.css";
import { useState } from "react";

export default function Menu() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logado, setLogado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (email === "caio@email.com" && password === "senha123") {
        setLogado(true);
      } else {
        alert("Credenciais inválidas!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="back">
        <div className="conteiner__menu">
          <div className="menu-header">
            <img src="src\assets\imgs\logo.png" alt="" />
          </div>
          <div className="datalog">
            
            {logado ? (
              <h1>Bem-vindo!</h1>
            ) : (
              <>
                <h1>Entrar</h1>
                <form className="datalog-form">
                  <input
                    className="login"
                    type="email"
                    value={email}
                    placeholder="email@email.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="login"
                    type="password"
                    value={password}
                    placeholder="*******"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button className="form-button" onClick={handleSubmit}>
                    Acessar
                  </button>
                </form>
                <a href="#">Crie uma Conta</a>
                <a href="#">Esqueceu a Senha?</a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
