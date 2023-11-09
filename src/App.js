import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ManagerPage from "./pages/Manager";
import ShopPage from "./pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "manager", element: <ManagerPage /> },
  { path: "shop", element: <ShopPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
