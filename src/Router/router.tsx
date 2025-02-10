import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../pages/App";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
