import React from 'react';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';

const Register = () => {

    const validationSchema = yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email format").required("Email is required"),
        password: yup.string().required("Password is required"),
    });

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const res = await axios.post('http://localhost:5000/register', values);
            alert(res.data);
            resetForm();
        } catch (err) {
            alert('Registration failed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-500">
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="bg-white p-8 rounded-md shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

                    <div className="mb-4">
                        <Field
                            name="name"
                            type="text"
                            placeholder="Name"
                            className="w-full p-2 border-b-2 border-blue-400 focus:outline-none"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div className="mb-4">
                        <Field
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border-b-2 border-blue-400 focus:outline-none"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div className="mb-6">
                        <Field
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 border-b-2 border-blue-400 focus:outline-none"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md"
                    >
                        Register
                    </button>

                    <p className="text-sm mt-4 text-center">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                    </p>
                </Form>
            </Formik>
        </div>
    );
};

export default Register;