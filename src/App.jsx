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

function App() {


  return (
    <>

      <AuthProvider>
        <BrowserRouter>

          <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/side" element={<Sidebar />} />
            <Route
              path="/dash"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />


          </Routes>
        </BrowserRouter>

      </AuthProvider>


    </>


  )
}

export default App
