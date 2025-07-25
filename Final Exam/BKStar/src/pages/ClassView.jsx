import React from 'react';
import { useParams } from 'react-router-dom';

export default function ClassView() {
    const { id } = useParams();

    return (
    <div className="class-view-container">

      <main className="main-content">
        <header className="class-header">
          <div className="info">
            <h1>Test Thi Thử</h1>
            <p>Giáo viên: Trần Xuân Bằng</p>
            <button>Chia sẻ lớp học</button>
          </div>
          <div className="avatars">
            <span>P</span>
            <span>B</span>
            <span>PD</span>
            <span>TB</span>
          </div>
        </header>

        <section className="stats">
          <div className="stat-box">4 Thành viên</div>
          <div className="stat-box">9 Bài kiểm tra</div>
        </section>

        <section className="member-list">
          <h2>Danh sách thành viên</h2>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Họ tên</th>
                <th>Vị trí</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Trần Xuân Bằng</td><td><span className="badge red">Giáo viên</span></td></tr>
              <tr><td>2</td><td>Phạm Thùy Dương</td><td><span className="badge green">Học sinh</span></td></tr>
              <tr><td>3</td><td>bang</td><td><span className="badge green">Học sinh</span></td></tr>
              <tr><td>4</td><td>Putin</td><td><span className="badge green">Học sinh</span></td></tr>
            </tbody>
          </table>
        </section>
      </main>

      <aside className="activity-sidebar">
        <h3>Hoạt động gần đây</h3>
        <ul>
          <li><b>Bài thi test</b> vừa được tải lên<br/><small>31-07-2025</small></li>
          <li><b>Bài thi test5</b> vừa được tải lên<br/><small>27-07-2025</small></li>
          <li><b>Bài thi test 4</b> vừa được tải lên<br/><small>26-07-2025</small></li>
        </ul>
      </aside>
    </div>
    )
}