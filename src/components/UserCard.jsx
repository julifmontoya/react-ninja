import React from 'react';

function UserCard({ name, age, isOnline }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h3 className="text-lg font-semibold">
        👤 {name} {isOnline ? <span className="text-green-500">🟢</span> : <span className="text-red-500">🔴</span>}
      </h3>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserCard;
