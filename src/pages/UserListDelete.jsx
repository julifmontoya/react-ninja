import React, { useState } from 'react';
import UserCard from '../components/UserCardDelete';

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 32 },
    { id: 3, name: 'Charlie', age: 29 }
  ]);

  const handleDelete = (idToDelete) => {
    setUsers((prevUsers) => prevUsers.filter(user => user.id !== idToDelete));
    console.log(`User with ID ${idToDelete} has been deleted`);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">User List</h2>

      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default UserList;