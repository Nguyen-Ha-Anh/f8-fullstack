import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import "./layout.css";

export default function Layout() {
  const location = useLocation();
  const { id } = useParams();

  const active = (path) => (location.pathname === path ? "active" : "");

  return (
    <div className="layout">
      <Header />
      <div className="layout-body">
        <aside className="sidebar">
          <h2>
            <span style={{ color: '#000' }}>BK</span>
            <span style={{ color: '#f9a825' }}>Star</span>
          </h2>
          <nav>
            <Link to={`/class/${id}`} className={active(`/class/${id}`)}>
              Tổng quan
            </Link>
            <Link to={`/class/${id}/exams`} className={active(`/class/${id}/exams`)}>
              Bài thi
            </Link>
            <Link to={`/class/${id}/members`} className={active(`/class/${id}/members`)}>
              Thành viên
            </Link>
          </nav>
        </aside>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
