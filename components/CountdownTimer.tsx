
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }); 

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  const timeEntries: [string, number][] = Object.entries(timeLeft);
  const relevantTimeEntries = timeLeft.days === 0 ? timeEntries.filter(([unit]) => unit !== 'days') : timeEntries;


  return (
    <div className="flex space-x-2 md:space-x-3 items-center justify-center my-4">
      {relevantTimeEntries.map(([unit, value]) => (
        <div 
          key={unit} 
          className="text-center p-2 md:p-3 bg-gradient-to-br from-brand-bg-card-start to-brand-bg-card-end rounded-xl shadow-brand-shadow-medium border border-brand-border min-w-[55px] md:min-w-[65px]"
        >
          <div className="text-2xl md:text-3xl font-bold text-brand-text-light">{formatTime(value)}</div> 
          <div className="text-xs uppercase text-brand-text-dark opacity-80 tracking-wider">{unit}</div> 
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;