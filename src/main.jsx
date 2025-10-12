import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'
import Home from './components/Home.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductList />
      },
      {
        path: "cart",
        element: <Cart />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
