import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'
import Home from './components/Home.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import About from './components/About.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import ProductDetails from './components/ProductDetails.jsx'
import Checkout from './components/Checkout.jsx'
import CheckoutForm from './components/CheckoutForm.jsx'

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
        path: "products",
        element: <ProductList />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "products/:id",
        element: <ProductDetails />
      },
      {
        path: "checkout",
        element: <Checkout />
      },
      {
        path: "checkout/details",
        element: <CheckoutForm />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }

])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
