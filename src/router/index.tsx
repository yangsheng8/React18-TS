import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/views/home'))
const Register = lazy(() => import('@/views/register'))
const SignIn = lazy(() => import('@/views/sign-in'))
const Discover = lazy(() => import('@/views/discover'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      }
    ]
  }
]
export default routes
