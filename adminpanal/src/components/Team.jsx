import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../data/features/userSlice';

const Team = () => {
  const [formdata, setFormdata] = useState({ username: "", email: "", password: "" });

  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.user);


  const handalechange = (e) => {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formdata));
    setFormdata({ username: "", email: "", password: "" });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-4'>
        <h1 className='text-2xl font-bold'>Add Team Member</h1>
        <input type="text" name='username' value={formdata.username} onChange={handalechange} placeholder='Username' />
        <input type="password" name='password' value={formdata.password} onChange={handalechange} placeholder='Password' />
        <input type="email" name='email' value={formdata.email} onChange={handalechange} placeholder='Email' />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="mt-6">
        <h3 className="font-bold mb-2">Submitted Users:</h3>
        {user.map((users, idx) => (
          <p key={idx}>{users.username} - {users.password}- {users.email}</p>
        ))}
      </div>
    </>
  )
}

export default Team
