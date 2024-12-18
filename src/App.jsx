
import "./App.css";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Dashboard } from "./components/Dashboard";
import { MyBanks } from "./components/MyBanks";
import { Transaction } from "./components/Transaction";
import { Payment } from "./components/Payment";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const openSideBar = () => {
    setIsActive(true);
  };

  const closeSideBar = () => {
    setIsActive(false);
  }

  const navigate = useNavigate();

  const handleClick = () => {
    const verify = name.length >= 4;

    if (verify) {
      navigate("/");
      console.log("Signup successful");
    } else {
      alert("Name must be at least 4 characters long");
    }
  };

  const Logins = (e) => {
    e.preventDefault();
    const correct = password.length >= 8;
    if (correct) {
      navigate("/dashboard");
    } else {
      alert("Password must be at least 8 characters long");
    }
  };

  return (
    <div className="relative">
     
      <Routes>
        
        <Route
          path="/"
          element={
            <Login
              password={password}
              onChange={setPassword}
              onClick={Logins}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup name={name} onClick={handleClick} onChange={setName} />
          }
        />
        <Route path="/dashboard" element={<Dashboard openSideBar={openSideBar} Active={isActive} name={name} closeSideBar={closeSideBar} />} />
        <Route path="/mybank" element={<MyBanks Active={isActive} openSideBar={openSideBar} closeSideBar={closeSideBar}/>} />
        <Route path="/mytransactions" element={<Transaction Active={isActive}  openSideBar={openSideBar} closeSideBar={closeSideBar}/>} />
        <Route path="/payment" element={<Payment Active={isActive}  openSideBar={openSideBar} closeSideBar={closeSideBar}/>} />
      </Routes>
    </div>
  );
}

export default App;
