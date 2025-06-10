import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../data/auth/authSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, token } = useSelector(state => state.auth);
  const [formdata, setFormdata] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formdata));
    setFormdata({ email: '', password: '' });
  };

  useEffect(() => {
    if (token) {
      navigate('/adminprofile/team'); // ✅ redirect after successful login
    }
  }, [token, navigate]);

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <input type="email" name="email" onChange={handleChange} value={formdata.email} placeholder="Email" />
        <input type="password" name="password" onChange={handleChange} value={formdata.password} placeholder="Password" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};

export default Profile;
