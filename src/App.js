import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import AboutPage from "./Pages/AboutPage/AboutPage/AboutPage";
import Blogs from "./Pages/Blogs/Blogs/Blogs";
import Booking from "./Pages/Booking/Booking";
import Contact from "./Pages/Contact/Contact";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashBoardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageAllOrder from "./Pages/Dashboard/ManageAllOrder/ManageAllOrder";
import ManageAllProducts from "./Pages/Dashboard/ManageAllProducts/ManageAllProducts";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route
                path="/booking/:serviceId"
                element={
                  <PrivateRoute>
                    <Booking />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              >
                <Route exact path="/dashboard" element={<DashBoardHome />} />
                <Route path="/dashboard/myorders" element={<MyOrders />} />
                <Route path="/dashboard/payment" element={<Payment />} />
                <Route path="/dashboard/addreview" element={<AddReview />} />
                <Route
                  path={`/dashboard/makeAdmin`}
                  element={
                    <AdminRoute>
                      <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                  }
                ></Route>
                <Route
                  path={`/dashboard/addProduct`}
                  element={
                    <AdminRoute>
                      <AddProduct></AddProduct>
                    </AdminRoute>
                  }
                ></Route>
                <Route
                  path={`/dashboard/manageAllOrder`}
                  element={
                    <AdminRoute>
                      <ManageAllOrder />
                    </AdminRoute>
                  }
                ></Route>
                <Route
                  path={`/dashboard/manageallproducts`}
                  element={
                    <AdminRoute>
                      <ManageAllProducts></ManageAllProducts>
                    </AdminRoute>
                  }
                ></Route>
              </Route>

              <Route path="/blogs" element={<Blogs />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
