import React, { useMemo, useState } from 'react';

function Memo() {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { id: 1, name: 'Alice Johnson', age: 28 },
    { id: 2, name: 'Marcus Lee', age: 35 },
    { id: 3, name: 'Sophia Rivera', age: 22 },
    { id: 4, name: 'Daniel Kim', age: 41 },
    { id: 5, name: 'Emma Brooks', age: 30 }
  ];

  // 🧠 Only re-filters if searchTerm or users changes
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, users]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">🔍 Filter Users</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded mb-4"
      />

      <ul className="list-disc ml-6 space-y-1">
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} – {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Memo;
