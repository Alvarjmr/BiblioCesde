import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./layouts/components/Menu.jsx";
import Infantil from "./layouts/components/Infantil.jsx";
import Ficcion from "./layouts/components/Ficcion.jsx";
import Ciencia from "./layouts/components/Ciencia.jsx";
import Desarrollo from "./layouts/components/Desarrollo.jsx";
import Autores from "./layouts/components/Autores.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inicio",
    element: <Menu />,
  },
  {
    path: "/infantil",
    element: <Infantil />,
  },
  {
    path: "/ficcion",
    element: <Ficcion />,
  },
  {
    path: "/ciencia",
    element: <Ciencia />,
  },
  {
    path: "/desarrollo",
    element: <Desarrollo />,
  },
  {
    path: "/autores",
    element: <Autores />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
