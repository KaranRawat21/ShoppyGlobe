import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import React, { Suspense } from 'react'


// 👇 Lazy load components
const App = React.lazy(() => import('./components/App.jsx'))
const NotFound = React.lazy(() => import('./components/NotFound.jsx'))
const Home = React.lazy(() => import('./components/Home.jsx'))
const ProductList = React.lazy(() => import('./components/ProductList.jsx'))
const Cart = React.lazy(() => import('./components/Cart.jsx'))
const About = React.lazy(() => import('./components/About.jsx'))
const ProductDetails = React.lazy(() => import('./components/ProductDetails.jsx'))
const Checkout = React.lazy(() => import('./components/Checkout.jsx'))
const CheckoutForm = React.lazy(() => import('./components/CheckoutForm.jsx'))


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading Home...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<div>Loading Products...</div>}>
            <ProductList />
          </Suspense>
        )
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div>Loading About...</div>}>
            <About />
          </Suspense>
        )
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<div>Loading Cart...</div>}>
            <Cart />
          </Suspense>
        )
      },
      {
        path: "products/:id",
        element: (
          <Suspense fallback={<div>Loading Product...</div>}>
            <ProductDetails />
          </Suspense>
        )
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<div>Loading Checkout...</div>}>
            <Checkout />
          </Suspense>
        )
      },
      {
        path: "checkout/details",
        element: (
          <Suspense fallback={<div>Loading Checkout Details...</div>}>
            <CheckoutForm />
          </Suspense>
        )
      }
    ]
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>Page Not Found...</div>}>
        <NotFound />
      </Suspense>
    )
  }

])

//Render the app
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
