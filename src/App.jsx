import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUserData(data[0]));
  }, []);

  function getRandomUser() {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data[0]);
        setBackgroundColor(getRandomColor());
      });
  }

  function getRandomColor() {
    const colors = ['red', 'pink', 'green', 'purple', 'light blue'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Randon User On Refresh</h1>
      {userData && (
        <div>
          <img src={userData.image} alt="user" />
          <p>Name:{userData.firstName},{userData.lastName}</p>
          <p>Location: {userData.address.city},{userData.address.country} </p>
          <p>Email: {userData.email} </p>
          <p>Gender: {userData.gender} </p>
        </div>
      )}
      <button className='btn btn-warning' onClick={getRandomUser} style={{ marginTop: '20px' }}>
        Refresh
      </button>
    </div>
  );
}

export default App;