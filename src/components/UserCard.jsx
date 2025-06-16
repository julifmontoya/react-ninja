import React from 'react';

// Destructure props directly in the function parameters
function UserCard({ name, age }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h3 className="text-lg font-semibold">👤 {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

export default UserCard;
