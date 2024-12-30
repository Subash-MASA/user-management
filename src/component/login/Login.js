import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Icon } from "@iconify/react/dist/iconify.js";

export const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
      // Trigger the login function from parent component
      onLogin();
      navigate("/layout");
    },
  });

  return (
    <div className="main">
      <div className="login-container">
        <div className="background-shape"></div>
        <div className="login-box">
          <h4>Login</h4>
          <form onSubmit={formik.handleSubmit}>
            <div className="input-container">
              <input
                name="email"
                placeholder="Email Address"
                className="input-field"
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="input-container">
              <input
                name="password"
                placeholder="Password"
                className="input-field"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
            <button type="submit" className="button">
              Sign Up
            </button>
          </form>
          <button className="google-btn">
            <Icon icon="flat-color-icons:google" width="28" height="28" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
