import { createBrowserRouter } from "react-router";
import Home from "../pages/Home.tsx";
import Layout from "../layouts/Layout.tsx";
import Register from "../pages/Register.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <div>로그인</div> },
      { path: "register", element: <Register/> },
    ],
  },
]);

export default router;
