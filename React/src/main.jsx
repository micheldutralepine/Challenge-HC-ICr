import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Agendamento from "./pages/Agendamento/Agendamento.jsx";
import Informacoes from "./pages/Informações/Informacoes.jsx";
import PerfilPersonalizado from "./pages/Perfil-Personalizado/Perfil-Personalizado.jsx";
import EducacaoLudica from "./pages/Educacao-Ludica/Educacao-Ludica.jsx";
import Relatos from "./pages/Relatos/Relatos.jsx";
import Impactos from "./pages/Impactos/Impactos.jsx";
import ConteudoPrincipal from "./Componentes/ConteudoPrincipal/ConteudoPrincipal.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ConteudoPrincipal /> },
      { path: "agendamento", element: <Agendamento /> },
      { path: "informacoes", element: <Informacoes /> },
      { path: "perfil-personalizado", element: <PerfilPersonalizado /> },
      { path: "educacao-ludica", element: <EducacaoLudica /> },
      { path: "relatos", element: <Relatos /> },
      { path: "impactos", element: <Impactos /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
