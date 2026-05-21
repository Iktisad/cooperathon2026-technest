import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-x-auto px-8 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
