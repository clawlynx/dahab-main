import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import HomePage from "./pages/home/HomePage";
import BuyMinersPage from "./pages/BuyMiners/BuyMinersPage";
import HostMiningPage from "./pages/hostMining/HostMiningPage";
import MinerRepairPage from "./pages/MinerRepair/MinerRepairPage";
import ErrorPage from "./pages/error/ErrorPage";
import AdminLayout from "./pages/admin/AdminLayout";
import DashboardPage from "./pages/admin/Dashboard/DashboardPage";
import AdminProductPage from "./pages/admin/Products/AdminProductPage";
import AddNewProduct from "./pages/admin/Products/AddNewProduct";
import SingleProductPage from "./pages/admin/Products/SingleProductPage";
import AuthLayout from "./pages/auth/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AdminCategoryPage from "./pages/admin/category/AdminCategoryPage";
import EditProduct from "./pages/admin/Products/EditProduct";
import ResetPassword from "./pages/auth/ResetPassword";
import AddNewCategory from "./pages/admin/category/AddNewCategory";
import SingleCategoryPage from "./pages/admin/category/SingleCategoryPage";
import AdminBlogPage from "./pages/admin/blog/AdminBlogPage";
import EditCategoryPage from "./pages/admin/category/EditCategoryPage";
import BlogPage from "./pages/blogs/BlogPage";
import SingleBlogPage from "./pages/blogs/SingleBlogPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "buy",
          element: <BuyMinersPage />,
        },
        {
          path: "host",
          element: <HostMiningPage />,
        },
        {
          path: "repair",
          element: <MinerRepairPage />,
        },
        {
          path: "blogs",
          element: <BlogPage />,
        },
        {
          path: "blogs/:id",
          element: <SingleBlogPage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        {
          path: "dashboard",
          element: <DashboardPage />,
        },
        {
          path: "products",
          element: <AdminProductPage />,
        },
        {
          path: "products/new",
          element: <AddNewProduct />,
        },

        {
          path: "products/:id",
          element: <SingleProductPage />,
        },
        {
          path: "products/:id/edit",
          element: <EditProduct />,
        },
        {
          path: "category",
          element: <AdminCategoryPage />,
        },
        {
          path: "category/new",
          element: <AddNewCategory />,
        },
        {
          path: "category/:id",
          element: <SingleCategoryPage />,
        },
        {
          path: "category/:id/edit",
          element: <EditCategoryPage />,
        },
        {
          path: "blogs",
          element: <AdminBlogPage />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "login", element: <LoginPage /> },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
