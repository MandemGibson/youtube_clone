import React from "react";
import "./styles/Login.css";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import img3 from "../src/images/google-icon.png";
import { Minimize } from "@mui/icons-material";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { Email, Password } = data;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        Email,
        Password
      );
      console.log("User is:", userCredential);
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const googleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(alert);
    }
  };

  return (
    <div className="login">
      <img
        src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
        alt=""
        className="youtube-logo"
      />
      <p>Sign In</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Email"
          type="email"
          {...register("Email", { required: true })}
        />
        {errors.Email && <p className="errMsg">Email is required!</p>}

        <input
          placeholder="Password"
          type="password"
          {...register("Password", { required: true })}
        />
        {errors.Password && <p className="errMsg">Password is required!</p>}

        <Button className="login-btn" type="submit">
          Sign In
        </Button>
      </form>
      <span>
        <p>Don't have an account yet?</p>
        <Link to="/register">Register</Link>
      </span>
      <h5>
        <Minimize />
        Or sign in with Google instead
        <Minimize />
      </h5>
      <Button className="google-btn" type="submit" onClick={googleClick}>
        <img src={img3} alt="" />
      </Button>
    </div>
  );
}

export default Login;
