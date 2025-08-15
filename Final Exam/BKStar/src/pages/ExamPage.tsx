import React, { useState } from 'react';
import './ExamPage.css';

const exams = [
 {
    id: 1,
    title: "Bài thi Toán - Giữa kỳ",
    description: "Kiểm tra kiến thức chương 1 đến 3",
    duration: "60 phút",
    status: "Chưa làm"
  },
  {
    id: 2,
    title: "Bài thi Vật Lý - Cuối kỳ",
    description: "Bao gồm lý thuyết và bài tập",
    duration: "90 phút",
    status: "Đã hoàn thành"
  }
]

function ExamPage() {
  return (
    <div className="exam-page">
      <h1 className="exam-title">Danh sách Bài thi</h1>

      <div className="exam-list">
        {exams.map((exam) => (
          <div className="exam-card" key={exam.id}>
            <div className="exam-info">
              <h3>{exam.title}</h3>
              <p>{exam.description}</p>
              <p><strong>Thời gian:</strong> {exam.duration}</p>
              <p><strong>Trạng thái:</strong> 
                <span className={exam.status === 'Đã hoàn thành' ? 'done' : 'pending'}>
                  {exam.status}
                </span>
              </p>
            </div>
            {exam.status === 'Chưa làm' ? (
              <button className="start-btn">Bắt đầu thi</button>
            ) : (
              <button className="view-btn">Xem kết quả</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExamPage;