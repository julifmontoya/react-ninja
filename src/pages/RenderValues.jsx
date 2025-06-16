import React from 'react';

function RenderValues() {
  const title = "I love Sofi";
  const likes = 50;
  const person = { name: "Yoshi", age: 30 };
  const isOnline = true;
  const num1 = 10;
  const num2 = 5;
  const sum = num1 + num2;

  const people = [
    { name: "Alice Johnson", age: 28 },
    { name: "Marcus Lee", age: 35 },
    { name: "Sophia Rivera", age: 22 },
    { name: "Daniel Kim", age: 41 },
    { name: "Emma Brooks", age: 30 }
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Hello, {title}</h2>
      <p>Likes: {likes}</p>
      <p>Name: {person.name}</p>

      <p>Status: {isOnline ? "Online 🟢" : "Offline 🔴"}</p>
      <p>Sum of {num1} + {num2} = {sum}</p>

      <h3 className="mt-4 font-semibold">People List:</h3>
      <ul className="list-disc ml-6">
        {people.map((p, index) => (
          <li key={index}>{p.name} - {p.age} years old</li>
        ))}
      </ul>
    </div>
  );
}

export default RenderValues;
