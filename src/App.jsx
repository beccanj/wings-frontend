import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import textIcon from './assets/vite.svg'
import SignUp from './features/auth/pages/SignUpSample'
import RegisterPage from './features/auth/pages/LoginPage'
import ForgotPassword from './features/auth/pages/ForgotPassword';

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<RegisterPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

        </Routes>
      </BrowserRouter>

    </>


  )
}

export default App
