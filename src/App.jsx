import { Routes, Route, Navigate } from "react-router-dom";

import Splash from "./pages/Splash";
import Welcome from "./pages/Welcome";
import Tracking from "./pages/Tracking";
import Dashboard from "./pages/Dashboard";

import History from "./pages/History";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";

function App() {

  return (

    <Routes>

      <Route path="/" element={<Splash />} />

      <Route path="/welcome" element={<Welcome />} />

      <Route path="/tracking" element={<Tracking />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/history" element={<History />} />

      <Route path="/alerts" element={<Alerts />} />

      <Route path="/settings" element={<Settings />} />

      <Route path="*" element={<Navigate to="/" />} />

    </Routes>

  );

}

export default App;