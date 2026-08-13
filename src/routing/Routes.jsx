import Home from '../pages/Home'
import About from '../pages/About'
import Questions from '../pages/Questions'
import Contact from '../pages/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../layout/Layout';
import Subjects from '../pages/Subjects';

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
                { path: "subjects", element: <Subjects /> },
            ]
        }
    ])

  return (
    <RouterProvider router={routes}/>
  )
}

export default Routes