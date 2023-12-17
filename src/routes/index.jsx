import React, { Suspense } from 'react'

// Pages
import Register from '../pages/Register'
// import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
// import Inventory from '../pages/Inventory'

// Components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
// import FileUpload from '../components/FileUpload'
import ProfileDisplay from '../pages/Profile'
import Footer from '../components/Footer'

// React Router
import { createBrowserRouter, Outlet } from 'react-router-dom'

// Routes
import UserRoutes from './UserRoutes'

// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    ),
    children: [
      {
        path: '/',
        element: (
          <>
            <Hero />
            <Footer />
          </>
        ),
      },
    ],
  },
  {
    // NOTE: This is a Protected Route (only logged in users can access)
    path: '/user',
    element: <UserRoutes />,
    children: [
      {
        path: '/user/home',
        Component: React.lazy(() => import('../pages/Home')),
      },
      {
        path: '/user/inventory',
        Component: React.lazy(() => import('../pages/Inventory')),
      },
      {
        path: '/user/orders',
        Component: React.lazy(() => import('../pages/Orders')),
      },
      {
        path: '/user/customers',
        Component: React.lazy(() => import('../pages/Customers')),
      },
      {
        path: '/user/upload',
        Component: React.lazy(() => import('../components/FileUpload')),
      },
      {
        path: '/user/reports',
        Component: React.lazy(() => import('../pages/report')),
      },
      {
        path: '/user/growth',
        Component: React.lazy(() => import('../pages/growth')),
      },
      {
        path: '/user/profile',
        Component: React.lazy(() => import('../pages/Profile')),
      },
      {
        path: '/user/settings',
        Component: React.lazy(() => import('../pages/Settings')),
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
])

export default router
