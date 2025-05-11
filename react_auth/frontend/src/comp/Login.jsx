import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Login = () => {
    const navigate = useNavigate()

    // Yup validation schema
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    })

    // Form submission handler
    const handleSubmit = async (values) => {
        try {
            const res = await axios.post("http://localhost:5000/login", values)
            localStorage.setItem("token", res.data.token)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-500">
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
                        <h2 className="text-2xl font-bold text-center mb-6">Welcome Login Page</h2>

                        {/* Email Input */}
                        <div className="mb-4">
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="w-full p-2 border-b-2 border-blue-400 focus:outline-none"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full p-2 border-b-2 border-blue-400 focus:outline-none"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        {/* Forgot Password */}
                        <Link to="/forgotpassword" className="text-sm text-blue-600 mb-4 cursor-pointer hover:underline">
                            Forgot Password
                        </Link>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
                        >
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </button>

                        {/* Sign Up Link */}
                        <p className="text-sm mt-4 text-center">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-blue-600 hover:underline">SignUp</Link>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login;
