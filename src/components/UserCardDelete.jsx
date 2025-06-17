import React from 'react';

function UserCard({ user, onDelete }) {
  return (
    <div className="border p-4 rounded shadow bg-white flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">👤 {user.name}</h3>
        <p>Age: {user.age}</p>
      </div>

      <button
        onClick={() => onDelete(user.id)}
        className="text-red-500 hover:text-red-700 text-xl"
        title="Delete user"
      >
        🗑️
      </button>
    </div>
  );
}

export default UserCard;
