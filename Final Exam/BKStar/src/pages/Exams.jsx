import React from "react";
import "./Exams.css";
import { FaFileAlt } from "react-icons/fa"; 
import { useNavigate, useParams } from "react-router-dom";

export default function Exams() {
  const navigate = useNavigate();
  const { id: classId } = useParams();

  const ongoingExams = [
    { id: 1, name: "ĐỀ THI LẦN 1", date: "05/01/2024" },
    { id: 2, name: "Thi thu lan 2", date: "26/01/2024" },
    { id: 3, name: "Thu Thu Lan 3", date: "28/01/2024" },
    { id: 4, name: "Thi Thu 4", date: "30/01/2024" },
    { id: 5, name: "Thi Thu 5", date: "22/04/2024" },
    { id: 6, name: "test 4", date: "07/07/2025" },
    { id: 7, name: "test5", date: "07/07/2025" },
  ];

  const upcomingExams = [
    { id: 8, name: "123123", date: "17/07/2025" },
    { id: 9, name: "test bài thi", date: "22/07/2025" },
  ];

  return (
    <div className="exams-page">
      <div className="exam-header">
        <h2>Danh sách Bài thi</h2>
        <div className="exam-actions">
          <input type="text" placeholder="Tìm kiếm" />
          <button className="create-button">+ Tạo bài thi</button>
        </div>
      </div>

      <div className="exam-section">
        <h3>Bài thi đang diễn ra</h3>
        <div className="exam-grid">
          {ongoingExams.map((exam) => (
            <div
              className="exam-box"
              key={exam.id}
              onClick={() => navigate(`/class/${classId}/test/${exam.id}`)}
              style={{ cursor: "pointer" }}
            >
              <FaFileAlt className="exam-icon" />
              <div className="exam-info">
                <strong>{exam.name}</strong>
                <p>Ngày bắt đầu: {exam.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="exam-section">
        <h3>Bài thi chưa bắt đầu</h3>
        <div className="exam-grid">
          {upcomingExams.map((exam) => (
            <div className="exam-box" key={exam.id}>
              <FaFileAlt className="exam-icon" />
              <div className="exam-info">
                <strong>{exam.name}</strong>
                <p>Ngày bắt đầu: {exam.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
