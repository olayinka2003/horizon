import { GiHamburgerMenu } from "react-icons/gi";
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
    setIsActive((f)=>!f);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    const verify = name.length >= 4;

    if (verify) {
      navigate("/dashboard");
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
      <p onClick={openSideBar} className="absolute right-4 top-0 text-black cursor-pointer lg:hidden block">
        <GiHamburgerMenu  />
      </p>
      <Routes>
        <Route
          path="/"
          element={
            <Signup name={name} onClick={handleClick} onChange={setName} />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              password={password}
              onChange={setPassword}
              onClick={Logins}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard Active={isActive} name={name} />} />
        <Route path="/mybank" element={<MyBanks Active={isActive}/>} />
        <Route path="/mytransactions" element={<Transaction Active={isActive} />} />
        <Route path="/payment" element={<Payment Active={isActive} />} />
      </Routes>
    </div>
  );
}

export default App;
