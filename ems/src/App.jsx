import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorege, SetLocalStorege } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(loggedInUser.role)
      }

    }
  })

  const handlelogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
      // console.log(user);
    } else if (authData && authData.employees.find((e) => email == e.email && e.password == password)) {
      // console.log("This is User");
      // console.log(user);
      setUser('employee');
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }))

    } else {
      alert("Invalid Credentials");
    }

  }



  return (
    <>
      {!user ? <Login handlelogin={handlelogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>

  )
}

export default App
