import { createRoot } from 'react-dom/client'
import { lazy, Suspense, StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error.jsx'

const Home = lazy(() => import("./components/Home.jsx"));
const ProductList = lazy(()=> import("./components/ProductList.jsx"));
const Cart = lazy(()=> import("./components/Cart.jsx"));
const ProductDetail = lazy(()=> import("./components/ProductDetail.jsx"));
const Checkout = lazy(()=> import("./components/Checkout.jsx"));

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: 
          <Suspense fallback={<p className="text-center text-lg">Wait...</p>}>
            <Home />
          </Suspense>
        },
        {
          
          path: "/products",
          element: 
          <Suspense fallback={<p className="text-center text-lg">Wait...</p>}>
            <ProductList />
          </Suspense>
        },
        {
          path: "/cart",
          element: 
          <Suspense fallback={<p className="text-center text-lg">Wait...</p>}>
            <Cart />
          </Suspense>
        },
        {
          path: "/checkout",
          element: 
          <Suspense fallback={<p className="text-center text-lg">Wait...</p>}>
            <Checkout />
          </Suspense>
        },
        {
          path: "/product/:id",
          element: 
          <Suspense fallback={<p className="text-center text-lg">Wait...</p>}>
            <ProductDetail />
          </Suspense>         
        }
      ]
    },
  ]
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Suspense fallback={<p className="text-center text-lg">Wait...</p>}>
        <RouterProvider router={appRouter} />
      </Suspense>
    </StrictMode>,
)
