import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import ManagerPage from "./pages/Manager";
import ShopPage from "./pages/Shop";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "manager", element: <ManagerPage /> },
      { path: "shop", element: <ShopPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
