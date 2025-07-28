import React from 'react';
import './TestDetail.css';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

const TestDetail = () => {
  const {testId, id} = useParams()
  const navigate = useNavigate()

  return (
    <div className="test-detail-page">
      <h2>Chi tiết bài thi</h2>

      <div className="test-info">
        <div>
            <p><strong>Tên bài thi:</strong> ĐỀ THI LẦN 1</p>
            <p><strong>Ngày bắt đầu:</strong> 2024-01-05</p>
            <p><strong>Thời gian chờ giữa các đề bài:</strong> 5 phút</p>
        </div>
        <div className="buttons">
          <Button 
            className='edit-btn'
            variant="contained"
            sx={{
                backgroundColor: '#4caf50',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
          >
            Chỉnh sửa
          </Button>

          <Button 
            className='delete-btn'
            variant="outlined"
            sx={{
                border: '1px solid #f44336',
                color: '#f44336',
                padding: '6px 12px',
            }}
          >
            Xóa bỏ
          </Button>
        </div>
      </div>

      <div className="exam-list-header">
        <h3>Danh sách đề bài</h3>
        <Button 
          variant="contained"
          onClick={() => {
            console.log("Navigate to:", `/class/${id}/test/${testId}/add-topic`)
            navigate(`/class/${id}/test/${testId}/add-topic`)
            }}
            >
              + Thêm đề bài
        </Button>
      </div>
      <div className="exam-list">
        <div className="exam-card">
          <div className="card-title">
            <p><strong>Đề bài:</strong> PHẦN 1: TƯ DUY TOÁN HỌC</p>
            <a href="#" className='edit-link'>
                <BorderColorOutlinedIcon />
                Edit
            </a>
          </div>
          <p>Mã đề: 01</p>
          <p>Thời gian làm bài: 60 phút</p>
          <p>Số câu hỏi: 40</p>
        </div>
        <div className="exam-card">
          <a href="#" className='edit-link'>
                <BorderColorOutlinedIcon />
                Edit
          </a>
          <p><strong>Đề bài:</strong> PHẦN 3: KHOA HỌC</p>
          <p>Mã đề: 01</p>
          <p>Thời gian làm bài: 60 phút</p>
          <p>Số câu hỏi: 20</p>

        </div>
        <div className="exam-card">
          <a href="#" className='edit-link'>
                <BorderColorOutlinedIcon />
                Edit
          </a>
          <p><strong>Đề bài:</strong> PHẦN 2: ĐỌC HIỂU</p>
          <p>Mã đề: 01</p>
          <p>Thời gian làm bài: 30 phút</p>
          <p>Số câu hỏi: 40</p>
        </div>
      </div>

      <h3>Danh sách bài làm</h3>
      <div className="student-list">
        <div className="student-card">
          <p><strong>Phạm Thùy Dương</strong> (duongduos...@gmail.com)</p>
          <p>Thời gian làm bài: ...</p>
          <p>Số đề đã hoàn thành: ...</p>
        </div>
        <div className="student-card">
          <p><strong>bang</strong> (bang@test.com)</p>
          <p>Thời gian làm bài: ...</p>
          <p>Số đề đã hoàn thành: ...</p>
        </div>
      </div>
    </div>
  );
};

export default TestDetail;
