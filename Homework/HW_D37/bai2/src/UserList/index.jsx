import React, { useState } from 'react';
import UserItem from './UserItem';

const users = [
  { id: 1, name: 'Nguyễn Văn A' },
  { id: 2, name: 'Trần Thị B' },
  { id: 3, name: 'Lê Văn C' },
];

function UserList() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>User List</h2>
      <button onClick={() => setScore(score + 1)}>Increase Score ({score})</button>

      <div>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
