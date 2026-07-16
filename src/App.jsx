import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import textIcon from './assets/vite.svg'
import SignUp from './features/auth/pages/SignUp'
import ForgotPassword from './features/auth/pages/ForgotPassword';
import Login from './features/auth/pages/LoginPage';
import DashboardLayout from './components/DashboardLayout';

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dash" element={<DashboardLayout />} />

        </Routes>
      </BrowserRouter>

    </>


  )
}

export default App
