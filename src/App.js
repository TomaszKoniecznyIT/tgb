import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import ManagerPage from "./pages/Manager";
import ShopPage from "./pages/Shop";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import AuthenticationPage from "./pages/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "manager", element: <ManagerPage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "auth", element: <AuthenticationPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
