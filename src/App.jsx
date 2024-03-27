import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Cart } from './components/Cart'
import { Promociones } from './pages/Promociones'
import { Nosotros } from './pages/Nosotros'
import { Productos } from './pages/Productos'

const MainLayout = () => {
  return (
    <main className='w-full h-full relative'>
      <Cart></Cart>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </main>
  )
}

const router = createBrowserRouter([{
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/productos',
      element: <Productos />
    },
    {
      path: '/promociones',
      element: <Promociones />
    },
    {
      path: '/nosotros',
      element: <Nosotros />
    }
  ]
}])

function App () {
  return (
    <RouterProvider router={router} />
  )
}

export default App
