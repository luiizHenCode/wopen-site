import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "views/Home";
import { Resources } from "views/Resources";

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/delivery",
      element: <Navigate to="/recursos/delivery" />,
    },
    {
      path: "/etiquetas",
      element: <Navigate to="/recursos/etiquetas" />,
    },
    {
      path: "/atentende-virtual",
      element: <Navigate to="/recursos/atentende-virtual" />,
    },
    {
      path: "/canais-de-atendimento",
      element: <Navigate to="/recursos/canais-de-atendimento" />,
    },
    {
      path: "/nova-conversa",
      element: <Navigate to="/recursos/nova-conversa" />,
    },
    {
      path: "/grupos-de-contato",
      element: <Navigate to="/recursos/grupos-de-contato" />,
    },
    {
      path: "/agenda",
      element: <Navigate to="/recursos/agenda" />,
    },
    {
      path: "/recursos",
      children: [
        {
          path: ":resource",
          element: <Resources openModal />,
        },
        {
          index: true,
          element: <Resources />,
        },
      ],
    },

    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return <RouterProvider router={router} />;
};
