import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [selectedTime, setSelectedTime] = useState(3600);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive]);

  const handleStart = () => {
    setTimeRemaining(selectedTime);
    setIsActive(true);
  };

  const handleReset = () => {
    setTimeRemaining(selectedTime);
    setIsActive(false);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTimeSelect = (event) => {
    setSelectedTime(parseInt(event.target.value));
  };

  return (
    <>
    <div className="timer-box">
      <div className="timer-container">
        <div className="countdown-timer">
          <div className="timer-display">{formatTime(timeRemaining)}</div>
          <div className="timer-text">Today's workout</div>
        </div>
        <select className="timer-select" onChange={handleTimeSelect}>
          <option value="3600">1 hour</option>
          <option value="1800">30 minutes</option>
          <option value="900">15 minutes</option>
        </select>
        <button className={`timer-button ${isActive ? 'active' : ''}`} onClick={isActive ? handleReset : handleStart}>
            {isActive ? 'RESET' : 'GO'}
          </button>
      </div>
    </div>
    <footer className='footer'>Code by Edu Garma Andersen<br></br> Design Credit <a href='https://dribbble.com/shots/11285224-Daily-UI-014-Countdown-Timer' target="_blank">Daily UI 014 Countdown Timer</a> on Dribbble</footer>
    </>
  );
}


export default CountdownTimer;