import React from 'react';
import UserCard from '../components/UserCard.jsx';

function UserList() {
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 32 },
    { name: 'Charlie', age: 29 }
  ];

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">User List</h2>

      {users.map((user, index) => (
        <UserCard key={index} name={user.name} age={user.age} />
      ))}
    </div>
  );
}

export default UserList;

