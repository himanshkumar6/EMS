import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import { AuthContext } from "./context/AuthProvider";
import Admin from "./components/Dashboard/Admin";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse('loggedInUser')
      setUser(userData.role)
      setLoggedInUser(userData.data)
    }
  }, [])

  const handelLogin = (email, password) => {
    const admin = userData.admin.find((e) => email == e.email && password == e.password)
    if (admin) {
      setUser('admin')
      setLoggedInUser(admin)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', email }))

    } else if (userData) {
      const employee = userData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {
        console.log(employee)
        setUser('employee')
        setLoggedInUser(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', email: employee.email }))
      }
    }
    else {
      alert('Invalid Credentials')
    }
  }
  return (
    <>
      {!user ? <Login handelLogin={handelLogin} /> : ""}
      {user == 'admin' ? <Admin data={loggedInUser} /> : (user == 'employee' ? <Dashboard data={loggedInUser} /> : null)}
    </>
  );
};

export default App;
