import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import ManagerPage from "./pages/Manager";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "manager", element: <ManagerPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
