import React, { useState, useEffect } from 'react';
import './Clock.scss';

export const Clock = () => {
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => tick(), 250);
    return () => clearInterval(timerId);
  });

  const tick = () => setTimer(new Date());

  return (
    <div className='clock-content'>
      <p>{timer.toLocaleTimeString()}</p>
    </div>
  );
};
