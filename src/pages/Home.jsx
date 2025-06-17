import React from 'react';
import ThemeToggler from '../components/ThemeToggler';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🏡 Home</h1>
      <ThemeToggler />
    </div>
  );
}

export default Home;
