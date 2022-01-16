import { getAuth, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./Register.css";

const Register = () => {
  const {
    signInUsingGoogle,
    userRegister,
    setUser,
    setError,
    setIsLoading,
    updateInfo,
  } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location?.state?.from || "/";

  const handleNameChange = (e) => {
    const nameC = e.target.value;
    // console.log(nameC);
    setName(nameC);
  };

  const handleEmailChange = (e) => {
    const emailC = e.target.value;
    console.log("type email", emailC);
    setEmail(emailC);
  };

  const handlePasswordChange = (e) => {
    const passwordC = e.target.value;
    // console.log(passwordC);
    // console.log(passwordC.length);
    if (passwordC.length < 6) {
      alert("Password length must be greater than 6 character");
    } else {
      setPassword(passwordC);
    }
  };

  const handleCheckPasswordChange = (e) => {
    const cPassword = e.target.value;
    // console.log(cPassword);
    if (password !== cPassword) {
      // console.log("Password didn't match");
    }
  };

  const handlePhoto = (e) => {
    const photoUrl = e.target.value;
    // console.log(photoUrl);
    setPhotoURL(photoUrl);
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    console.log("onclick email", email);
    userRegister(email, password)
      .then((res) => {
        setIsLoading(true);
        updateInfo(name, photoURL);
        const user = res.user;
        setUser(user);
        verifyEmail(email);
        setError("");
        navigate(redirect_uri);
        saveUser(email, name, photoURL, "POST");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const verifyEmail = (email) => {
    const auth = getAuth();
    sendEmailVerification(auth.currentUser).then(() => {});
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        setIsLoading(true);
        const user = result.user;
        setUser(user);
        setError("");
        navigate(redirect_uri);
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
    console.log("post email", email);
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
      <Header />
      <div className="text-center container register">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <img
              src="https://i.ibb.co/jv0bwVT/Tablet-login-amico.png"
              alt=""
              className="w-100 mt-5"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12 register-form">
            <h1 className="my-5  text-primary">Register</h1>
            <form onSubmit={handleRegisterForm}>
              <label htmlFor="name"></label>
              <input
                onBlur={handleNameChange}
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="p-2 m-2 w-50 "
                required
              />
              <br />
              <label htmlFor="email"></label>
              <input
                onBlur={handleEmailChange}
                type="text"
                name="email"
                placeholder="Enter Email"
                className="p-2 m-2 w-50 "
                required
              />
              <br />
              <label htmlFor="password"></label>
              <input
                onBlur={handlePasswordChange}
                type="password"
                name="password"
                placeholder="Enter Password"
                className="p-2 m-2  w-50 "
                required
              />
              <br />
              <label htmlFor="password"></label>
              <input
                onBlur={handleCheckPasswordChange}
                type="password"
                name="password"
                placeholder="Re-type Password"
                className="p-2 m-2  w-50 "
                required
              />
              <br />
              <label htmlFor="photo"></label>
              <input
                onBlur={handlePhoto}
                type="text"
                name="photo"
                placeholder="Photo Url"
                className="p-2 m-2  w-50 "
              />
              <br />
              <input type="submit" value="Register" className="p-2 w-50 m-2" />
            </form>
            <p className="my-3">
              Already registered ?{" "}
              <Link
                className="link text-primary"
                to="/login"
                style={{ textDecoration: "none" }}
              >
                Login Now
              </Link>
            </p>
            <Button
              onClick={handleGoogleSignIn}
              variant="primary"
              className="mb-3 w-50"
            >
              Google SignIn
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
