
import './App.css'
import { Login } from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup } from './components/Signup';
import { Dashboard } from './components/Dashboard';
import { MyBanks } from './components/MyBanks';
import { Transaction } from './components/Transaction';
import { Payment } from './components/Payment';


function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path= "/mybank" element={<MyBanks />}/>
          <Route path='/mytransactions' element={<Transaction/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
