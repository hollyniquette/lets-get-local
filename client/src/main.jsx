import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './components/HomePage.jsx'
import ProfilePage from './components/ProfilePage.jsx'
import NewEvent from './components/NewEvent.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'profile/newevent',
        element: <NewEvent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
