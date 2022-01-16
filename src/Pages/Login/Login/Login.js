import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_uri = location?.state?.from || "/";

  const {
    userSignIn,
    signInUsingGoogle,
    setUser,
    setError,
    setIsLoading,
    forgetPassword,
    error,
    user,
  } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginForm = (e) => {
    e.preventDefault();
    userSignIn(email, password)
      .then((res) => {
        setIsLoading(true);
        const user = res.user;
        setUser(user);
        navigate(redirect_uri);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    forgetPassword(email)
      .then(() => {
        alert("Password reset email sent!");
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        setIsLoading(true);
        const user = result.user;
        setUser(user);
        navigate(redirect_uri);
        setError("");
        saveUser(user.email, user.displayName, user.photoURL, "PUT");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const saveUser = (email, displayName, photoURL, method) => {
    const user = { email, displayName, photoURL };
    fetch("https://lit-inlet-63211.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return (
    <div>
      <Header></Header>
      <div className="text-center container login">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12 login-form">
            <h2 className="mt-5 text-primary" style={{ fontSize: "50px" }}>
              Login
            </h2>
            <form onSubmit={handleLoginForm}>
              <label htmlFor="email"></label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                className="p-2 mt-5 mb-2 w-50 "
                onBlur={handleEmailChange}
                required
              />
              <br />
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="p-2 m-2  w-50 "
                onBlur={handlePasswordChange}
                required
              />
              <br />
              <input type="submit" value="Login" className="p-2 w-50 m-2" />
            </form>
            <p className="my-4">
              <Link
                onClick={handleForgetPassword}
                className="text-primary "
                to="/register"
                style={{ textDecoration: "none" }}
              >
                Forget Password ?
              </Link>
            </p>
            <button
              className="mb-3 w-50 btn btn-success  mt-3"
              onClick={handleGoogleSignIn}
            >
              Google SignIn
            </button>
            <p className="my-4">
              Don't have account ?{" "}
              <Link
                className="text-primary"
                to="/register"
                style={{ textDecoration: "none" }}
              >
                Register Now
              </Link>
            </p>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <img
              src="https://i.ibb.co/RB6XrsJ/Tablet-login-bro.png"
              alt=""
              className="w-100"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
