import React, { ChangeEvent, FocusEvent, FC , memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiLockClosed } from "react-icons/hi";
import { useState } from "react";
import {FaSpinner} from "react-icons/fa";
import * as yup from "yup";
import { useEffect } from "react";
import { useFormik } from "formik";
import Input from "../components/Input";
interface Props{
}
const Login: React.FC<Props> = (props) => {
  const history = useHistory();
  const {handleSubmit, getFieldProps, touched, isSubmitting, errors, isValid}
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
          <Input 
            id="email-address"
            type="email"
            autoComplete="email"
            required
            touched={touched.email}
            error={errors.email}
            {...getFieldProps("email")}
            placeholder="email address"
            className="rounded-b-none"
            />
            <Input 
            id="password"
            type="password"
            autoComplete="password"
            required
            touched={touched.password}
            error={errors.password}
            {...getFieldProps("password")}
            placeholder="password"
            className="rounded-t-none mt-5"
            />
          </div>
          <div className="flex items-center justify-beyween" >
            <div>
              <button type="submit"
                 disabled={!isValid}
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


