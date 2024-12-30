import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./component/login/Login";
import { Layout } from "./component/layout/Layout";
import { Patients } from "./Pages/patients/Patients";
import { Appointments } from "./Pages/appointments/Appointments";
import { Communication } from "./Pages/communication/Communication";
import { Survey } from "./Pages/survey/Survey";
import { Payment } from "./Pages/payment/Payment";
import { ManageUser } from "./Pages/manage-user/ManageUser";
import { useState } from "react";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/layout"
          element={
            isAuthenticated ? (
              <Layout onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        >
          <Route index element={<Navigate to="patients" replace />} />
          <Route path="patients" element={<Patients />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="communication" element={<Communication />} />
          <Route path="survey" element={<Survey />} />
          <Route path="payment" element={<Payment />} />
          <Route path="manageuser" element={<ManageUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
