import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/Home";
import ManagerPage from "./pages/Manager";
import ShopPage from "./pages/Shop";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import SingupPage, { action as addNewUserAction } from "./pages/Singup";
import LoginPage from "./pages/Login";

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
      {
        path: "auth/singup",
        element: <SingupPage />,
        action: addNewUserAction,
      },
      { path: "auth/login", element: <LoginPage /> },
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
