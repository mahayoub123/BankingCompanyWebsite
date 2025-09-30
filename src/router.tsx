import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SecurityPage from "./pages/SecurityPage";
import CarreersPage from "./pages/CarreersPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/seq",
    element: <SecurityPage />,
  },
  {
    path: "/careers",
    element: <CarreersPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);
