import React from 'react';

function RenderValues() {
  const title = "I love Sofi";
  const likes = 50;
  const person = {
    name: "Yoshi",
    age: 30,
    hobbies: ["gaming", "cooking", "cycling"],
    address: {
      city: "Tokyo",
      country: "Japan"
    }
  };
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

  const fruits = ["apple", "pineapple", "grape", "watermelon"];

  const fruitsInfo = [
    { name: "Apple", color: "red", isCitrus: false },
    { name: "Orange", color: "orange", isCitrus: true },
    { name: "Banana", color: "yellow", isCitrus: false },
    { name: "Lemon", color: "yellow", isCitrus: true }
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

      <h3 className="mt-4 font-semibold">Fruits (basic):</h3>
      <ul className="list-disc ml-6">
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h3 className="mt-4 font-semibold">Person Details:</h3>
      <p>City: {person.address.city}</p>
      <p>Country: {person.address.country}</p>
      <p>Hobbies:</p>
      <ul className="list-disc ml-6">
        {person.hobbies.map((hobby, idx) => (
          <li key={idx}>{hobby}</li>
        ))}
      </ul>

      <h3 className="mt-4 font-semibold">Fruits (detailed):</h3>
      <ul className="list-disc ml-6">
        {fruitsInfo.map((fruit, index) => (
          <li key={index}>
            {fruit.name} - Color: {fruit.color} {fruit.isCitrus && "(Citrus 🍊)"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderValues;
