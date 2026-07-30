import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import textIcon from './assets/vite.svg'
import SignUp from './features/auth/pages/SignUp'
import ForgotPassword from './features/auth/pages/ForgotPassword';
import Login from './features/auth/pages/LoginPage';
import DashboardLayout from './components/DashboardLayout';
import Sidebar from './components/layout/Sidebar';
import ProtectedRoute from './features/auth/components/Protectedroute';
import { AuthProvider } from './features/auth/components/Authcontext';
import Dashboard from './features/employer/pages/Dashboard';
import Messages from './features/employer/pages/Messages';
import { RoleProvider } from './features/auth/components/Rolecontext';

function App() {


  return (
    <>

      <RoleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />

            <Route path="/dash" element={<Dashboard />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </BrowserRouter>
      </RoleProvider>


    </>


  )
}

export default App
