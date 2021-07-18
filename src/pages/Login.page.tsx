import React, { ChangeEvent, FocusEvent, FC , memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiLockClosed } from "react-icons/hi";
import { useState } from "react";
import {FaSpinner} from "react-icons/fa";
import * as yup from "yup";
import { useEffect } from "react";
import { useFormik } from "formik";
interface Props{
}
const Login: React.FC<Props> = (props) => {
  const history = useHistory();
  const {handleSubmit, handleChange, handleBlur, validateField, values, touched, isSubmitting, errors}
   = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(8)
    }),
    onSubmit: (data, {setSubmitting}) => {
      console.log("form submittng", data);
      setTimeout(() => {
        console.log("form submitted successfully");
        history.push("/dashboard")
      }, 5000);
    }
  });
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-24">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            New here ?{' '}
            <Link to="/auth/signup"><span className = "text-blue-500">Create an account</span></Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST"
          onSubmit = {handleSubmit}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            {touched.email && <div className="text-red-500 text-xs">{errors.email}</div>}
            <div className="mt-8 space-y-6">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {touched.password && <div className="text-red-500 text-xs">{errors.password}</div>}
          </div>
          <div className="flex items-center justify-beyween" >
            <div>
              <button type="submit"
                 
                className="group relative w-32 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <HiLockClosed className="h-4 w-4 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Log in
              </button>
            </div>
            <div className="ml-4 animate-spin">
              {isSubmitting && <FaSpinner ></FaSpinner>}
            </div>
          </div>
            <div className="flex items-center px-20">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 text-center">
                Keep me signed in
              </label>
            </div>

            <div className="text-sm px-20">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>

          
        </form>
      </div>
    </div>
        
);
};

Login.defaultProps = {
}

export default memo(Login);