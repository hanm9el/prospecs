import { createBrowserRouter, redirect } from "react-router";
import Home from "../pages/Home.tsx";
import Layout from "../layouts/Layout.tsx";
import Register from "../pages/Register.tsx";
import Login from "../pages/Login.tsx";
import useAuthStore from "../store/useAuthStore.ts";
import ProductListPage from "../pages/(shop)/ProductListPage.tsx";

// loader : 해당 주소에 사용자가 가려고 할 때 (요청), 화면에 출력해주기 이전 실행되는 함수
// 조건을 걸고, 아무런 문제가 없으면 null을 반환해서 화면이 출력 되도록 해야함
const gestOnlyLoader = () => {
  const isLoggedIn = useAuthStore.getState().isLoggedIn;
  if (isLoggedIn) {
    // navigate와 redirect의 차이
    // navigate를 쓰려면 마찬가지로 useNavigate -> use. 컴포넌트 안에서 보낼 때
    return redirect("/")
  }
  return null;
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login />, loader:gestOnlyLoader},
      { path: "register", element: <Register/> ,loader:gestOnlyLoader },
      { path: "category/:id", element: <ProductListPage />},
    ],
  },
]);

export default router;
