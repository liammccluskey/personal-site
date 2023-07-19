import React, {useEffect, useState} from 'react'
import { RouterProvider as __RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home } from '../../views/pages/Home'
import {Contact} from '../../views/pages/Contact'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/contact',
      element: <Contact />
    }
])

export const RouterProvider = props => {
  return (
      <__RouterProvider
          router={router}
      />
  )
}