import { useState } from "react";
import './AddTopic.css';

function AddTopic() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [duration, setDuration] = useState('');
  const [numQuestions, setNumQuestions] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTopic = { image, title, code, duration, numQuestions };
    console.log("Đề bài mới:", newTopic);
  };

  return (
    <div className="add-topic-container">
      <h2>Thêm đề bài</h2>
      <form className="add-topic-form" onSubmit={handleSubmit}>

        <div className="left-upload">
          <label className="form-label">Tải ảnh đề bài</label>
          <input type="file" onChange={handleImageChange} accept="image/*" />
          {image && (
            <div className="image-preview">
              <img src={URL.createObjectURL(image)} alt="Preview" />
            </div>
          )}
        </div>
        
        <div className="right-info">
          <div className="form-group">
            <label>Tên đề bài</label>
            <input
              type="text"
              placeholder="Nhập tên đề bài"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Mã đề</label>
            <input
              type="text"
              placeholder="Nhập mã đề"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Thời gian làm bài (phút)</label>
            <input
              type="number"
              placeholder="VD: 60"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Số câu hỏi</label>
            <input
              type="number"
              placeholder="VD: 20"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Thêm đề bài</button>
        </div>
      </form>
    </div>
  );
}

export default AddTopic;
