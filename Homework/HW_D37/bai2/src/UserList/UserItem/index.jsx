import React, { memo } from 'react';

const UserItem = memo(({ user }) => {
  console.log('Rendering:', user.name)
  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  )
})

export default UserItem;
