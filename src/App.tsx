import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import CommunitySupport from "./pages/CommunitySupport";
import Dashboard from "./pages/Dashboard";
import IncidentReports from "./pages/IncidentReports";
import Resources from "./pages/Resources";
import Settings from "./pages/Settings";
import TrainingPrograms from "./pages/TrainingPrograms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="training" element={<TrainingPrograms />} />
          <Route path="incidents" element={<IncidentReports />} />
          <Route path="support" element={<CommunitySupport />} />
          <Route path="resources" element={<Resources />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
