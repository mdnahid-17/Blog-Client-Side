import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import BlogDetails from "../pages/BlogDetails";
import UpdateBlog from "../pages/UpdateBlog";
import AllBlogs from "../pages/AllBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs";
import Wishlists from "../pages/Wishlists";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import { Layouts } from "../layouts/Layouts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-blog",
        element: <AddBlog />,
      },
      {
        path: "/update/:id",
        element: <UpdateBlog/>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`),
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`),
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/blogs`)
      },
      {
        path: "/featured-blogs",
        element: <FeaturedBlogs />,
      },
      {
        path: "/wishlist",
        element: <Wishlists />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
