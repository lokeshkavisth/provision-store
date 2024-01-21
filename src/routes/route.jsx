import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const SignIn = React.lazy(() => import("../pages/SignIn"));

const pagesData = [
  {
    path: "/",
    element: <Home />,
    id: 1,
    requiresAuth: true,
  },
  {
    path: "/about",
    element: <About />,
    id: 2,
    requiresAuth: true,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    id: 3,
  },
];

const PrivateRoute = React.memo(({ element, requiresAuth, path }) => {
  const { authData } = useAuth();

  if (requiresAuth && !authData?.access_token) {
    return <Navigate to="/sign-in" />;
  }

  return element;
});

PrivateRoute.displayName = "PrivateRoute";

const Router = () => {
  return (
    <Routes>
      {pagesData.map(({ path, element, id, requiresAuth }) => (
        <Route
          key={id}
          path={path}
          element={
            <PrivateRoute
              element={element}
              requiresAuth={requiresAuth}
              path={path}
              id={id}
            />
          }
        />
      ))}
    </Routes>
  );
};

export default Router;
