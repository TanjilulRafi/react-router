import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Users from './components/Users/Users';
import UserDetails from './UserDetails/UserDetails';
import Posts from './UserDetails/Posts/Posts';
import Postdetails from './components/PostDetails/Postdetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <Postdetails></Postdetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
