import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../auth-user/@service-user';
import { ErrorAlert, ErrorSuccess } from '../../../common/ui/Error';
import type { UserType } from '../auth-user/@type';

type LoginType = Pick<UserType, 'email' | 'password'>;

const Login = () => {
    const [error, setErrorMsg] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const navigate = useNavigate();

    const initialValues: LoginType = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .min(3, 'Minimum 3 characters')
            .required('Password is required'),
    });

    const onSubmit = async (values: LoginType) => {
        try {
            const data = await loginUser(values);
            setSuccess('Login successful!');
            localStorage.setItem("token", data.data.token);
            navigate('/dashboard');
        } catch (error: any) {
            setErrorMsg(error?.message || 'Login failed!');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                {error && <ErrorAlert message={error} onClose={() => setErrorMsg(null)} />}
                {success && <ErrorSuccess message={success} onClose={() => setSuccess(null)} />}

                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome Back 👋</h2>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {({ errors, touched }) => (
                        <Form className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {touched.email && errors.email && (
                                    <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                                )}
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {touched.password && errors.password && (
                                    <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded transition"
                            >
                                Sign In
                            </button>
                        </Form>
                    )}
                </Formik>

                <div className="mt-4 text-center">
                    <Link to="/register" className="text-indigo-600 hover:underline text-sm">Register
                    </Link>
                </div>
                <div className="mt-4 text-center">
                    <Link to="/forgetpassword" className="text-indigo-600 hover:underline text-sm">
                        Forgot Password?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
