import React from 'react';

const Header = () => {
    return (
      <div style={{ backgroundColor: 'white', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
        <h1 style={{ textAlign: 'center', margin: 0, padding: '20px' }}>Quiz-App</h1>
      </div>
    );
  };

const Question = ({ category, question }) => {
    return (
        <div>
          <Header />
          <div style={{ paddingTop: '100px', textAlign: 'center' }}>
            <h2>{category}</h2>
            <hr style={{ width: '50%', margin: 'auto' }} />
            <p>{question}</p>
          </div>
        </div>
      );
    };

export { Header, Question };