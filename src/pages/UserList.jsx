import React from 'react';
import UserCard from '../components/UserCard';

function UserList() {
  const users = [
    { name: 'Alice', age: 25, isOnline: true },
    { name: 'Bob', age: 32, isOnline: false },
    { name: 'Charlie', age: 29, isOnline: true }
  ];

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">User List</h2>

      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          age={user.age}
          isOnline={user.isOnline}
        />
      ))}
    </div>
  );
}

export default UserList;
