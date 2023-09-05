import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import HomePage from "./components/HomePage.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import NewEvent from "./components/NewEvent.jsx";
import LoginPage from "./components/LoginPage.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import EditEvent from "./components/EditEvent.jsx";

if (process.env.NODE_ENV !== "production") {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "profile/newevent",
        element: <NewEvent />,
      },
      {
        path: "profile/editevent/:eventid",
        element: <EditEvent />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
