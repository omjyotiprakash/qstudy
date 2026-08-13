import Home from '../pages/Home'
import About from '../pages/About'
import Questions from '../pages/Questions'
import Contact from '../pages/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../layout/Layout';

const Routes = () => {

     const routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
                { path: "questions", element: <Questions /> },
                { path: "contact", element: <Contact /> },
            ]
        }
    ])

  return (
    <RouterProvider router={routes}/>
  )
}

export default Routes