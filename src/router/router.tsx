import { createBrowserRouter } from "react-router";
import Home from "../pages/Home.tsx";
import Layout from "../layouts/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <div>로그인</div> },
      { path: "signup", element: <div>회원가입</div> },
    ],
  },
]);

export default router;
