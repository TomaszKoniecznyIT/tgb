import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/Home";
import ManagerPage from "./pages/Manager";
import ShopPage from "./pages/Shop";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import SingupPage, { action as addNewUserAction } from "./pages/Singup";
import LoginPage, { action as loginAction } from "./pages/Login";
import { action as logoutAction } from "./pages/Logout";
import { checkAuthLoader, tokenLoader } from "./util/auth";
import NewShopPage, { action as addNewShopAction } from "./pages/NewShop";
import ManagerShopsPage, { loader as shopsLoader } from "./pages/ManagerShops";
import ShopDetailPage, { loader as shopLoader } from "./pages/ShopDetail";
import TargetPage from "./pages/Target";
import SalePage from "./pages/Sale";
import { queryClient } from "./util/http.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "manager",
        loader: checkAuthLoader,
        children: [
          { index: true, element: <ManagerPage /> },
          {
            path: "new_shop",
            element: <NewShopPage />,
            action: addNewShopAction,
          },
          {
            path: "shops",
            children: [
              {
                index: true,
                element: <ManagerShopsPage />,
                loader: shopsLoader,
              },
              {
                path: ":shopId",
                children: [
                  {
                    index: true,
                    element: <ShopDetailPage />,
                    loader: shopLoader,
                  },
                  { path: "target", element: <TargetPage /> },
                  { path: "sale", element: <SalePage /> },
                ],
              },
            ],
          },
        ],
      },
      { path: "shop", element: <ShopPage />, loader: checkAuthLoader },
      {
        path: "auth/singup",
        element: <SingupPage />,
        action: addNewUserAction,
      },
      { path: "auth/login", element: <LoginPage />, action: loginAction },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
