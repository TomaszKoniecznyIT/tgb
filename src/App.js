import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
import TargetPage, { loader as loaderShopsTarget } from "./pages/Target";
import TargetEditPage, { loader as loaderShops } from "./pages/TargetEdit";

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
            path: "target",

            children: [
              {
                index: true,
                element: <TargetPage />,
                loader: loaderShopsTarget,
              },
              {
                path: "edit",
                element: <TargetEditPage />,
                loader: loaderShops,
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
