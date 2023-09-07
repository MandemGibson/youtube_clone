import React from "react";
import "../src/styles/Register.css";
import { Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { Email, Password, Name, ProfilePic } = data;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        Email,
        Password
      );
      await updateProfile(userCredential.user, {
        displayName: Name,
        photoURL: ProfilePic,
      });
      console.log("User registered:", userCredential);
      navigate("/");
    } catch (error) {
      console.error("Register Error:", error);
    }
  };

  return (
    <div className="login">
      <img
        src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
        alt=""
        className="youtube-logo"
      />
      <p>Sign Up</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          type="text"
          {...register("Name", { required: true })}
        />
        {errors.Name && <p className="errMsg">Name is required!</p>}

        <Tooltip title="Takes a URL">
          <input
            placeholder="Profile picture(optional)"
            type="text"
            {...register("ProfilePic", { required: true })}
          />
        </Tooltip>

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
          Sign Up
        </Button>
      </form>
      <span>
        <p>Have an account already?</p>
        <Link to="/login">Login</Link>
      </span>
    </div>
  );
}

export default Register;
