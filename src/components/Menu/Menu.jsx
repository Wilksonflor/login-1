import "./Menu.css";
import { useState } from "react";
import usuarios from "../../Usuarios";
// import { CriarConta } from "../criarConta/CriarConta";

export default function Menu() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logado, setLogado] = useState(false);
  const [usuarioLogado, setUsuarioLogadl] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const usuarioEncontrado = usuarios.find(
        (user) => user.email === email && user.senha === password
      );

      if (usuarioEncontrado) {
        setLogado(true);
        setUsuarioLogadl(usuarioEncontrado);
      } else {
        alert("credenciais inválidas");
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
              <h1>Bem-vindo, {usuarioLogado.nome}!</h1>
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
                {/* {rotas.map((data, index) => (
                  <div key={index}>
                    <a href={data.url}></a>
                    <a href={data.url}>{data.nome}</a>
                  </div>
                ))} */}
                <a href="#">Criar conta</a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
