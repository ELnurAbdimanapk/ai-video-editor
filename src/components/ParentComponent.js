import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const ParentComponent = () => {
  
  const handleLogin = async (credentials) => {
    try {
      const response = await fetch('YOUR_API_URL/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      
      // Handle response data as needed
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRegister = async (credentials) => {
    try {
      const response = await fetch('YOUR_API_URL/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      
      // Handle response data as needed
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <LoginForm handleLogin={handleLogin} />
      <RegisterForm handleRegister={handleRegister} />
    </div>
  );
};

export default ParentComponent;
