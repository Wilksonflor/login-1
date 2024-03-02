import Menu from "../Menu/Menu";
import { CriarConta } from "../criarConta/CriarConta";
import { SenhaF } from "../LembrarSenha/SenhaF";
import { BrowserRouter, Route } from "react-router-dom";

export const Rotas = () => {
  return (
    <>
      <BrowserRouter>
        <Route component={Menu} path="/" exact />
        <Route component={CriarConta} path="/criarConta" />
        <Route component={SenhaF} path="/lembrarSenha" />
      </BrowserRouter>
    </>
  );
};
