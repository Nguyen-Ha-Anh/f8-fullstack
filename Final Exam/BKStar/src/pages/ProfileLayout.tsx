import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}
