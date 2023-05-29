import React, { useState } from 'react';

const PasswordStrengthMeter = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const calculatePasswordStrength = (password) => {
    const strength = password.length >= 8 ? 'Strong' : 'Weak';
    return strength;
  };

  const passwordStrength = calculatePasswordStrength(password);

  return (
    <div >
    <h2>Password strength</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <div >{passwordStrength}</div>
    </div>
  );
};

export default PasswordStrengthMeter;
