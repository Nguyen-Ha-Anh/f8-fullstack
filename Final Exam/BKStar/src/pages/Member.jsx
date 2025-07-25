import React from "react";
import "./Member.css";

const members = [
  { id: 1, name: "Trần Xuân Bằng", role: "Giáo viên" },
  { id: 2, name: "Phạm Thúy Dương", role: "Học sinh" },
  { id: 3, name: "bang", role: "Học sinh" },
  { id: 4, name: "Putin", role: "Học sinh" },
];

const Member = () => {
  return (
    <div className="members-wrapper">
      <h2 className="members-title">Danh sách thành viên</h2>
      <table className="members-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Họ tên</th>
            <th>Vị trí</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Member;
