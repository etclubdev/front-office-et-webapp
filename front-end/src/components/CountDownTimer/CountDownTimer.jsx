import React, { useEffect, useRef, useState } from 'react';

import { CountDownCard } from '../CountDownCard';

import './CountDownTimer.css';

import { getCurrentTimeInVietnam, calculateDateDifferenceVN } from '../../utils/timeUtil';

export const CountDownTimer = () => {

  const SecondsCardRef = useRef(null);
  const MinutesCardRef = useRef(null);
  const HoursCardRef = useRef(null);
  const DaysCardRef = useRef(null);

  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const setTime = () => {
      const lunarNewYearDate = "2025-01-29T00:00:00+07:00";
      const currentVietnamTime = getCurrentTimeInVietnam();

      const remainingTime = calculateDateDifferenceVN(currentVietnamTime, lunarNewYearDate);

      setDays(remainingTime.days);
      setHours(remainingTime.hours);
      setMinutes(remainingTime.minutes);
      setSeconds(remainingTime.seconds);
    }
    setTime();
  }, []);

  useEffect(() => {
    if (seconds === 0 && minutes > 0) {
      setSeconds(59);
      setMinutes(minutes - 1);
      MinutesCardRef.current.classList.toggle('rotate');
    }

    if (minutes === 0 && hours > 0) setMinutes(59);

    if (seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
        SecondsCardRef.current.classList.toggle('rotate');
      }, 1000);
    }   
  }, [seconds, minutes, hours]);

  useEffect(() => {
    if (hours === 0 && days > 0) setHours(23);

    if (minutes === 0 && hours > 0) {
      setHours(hours - 1);
      HoursCardRef.current.classList.toggle('rotate');
    }
  }, [minutes, hours, days]);

  useEffect(() => {
    if (hours === 0 && days > 0){
      setDays(days - 1)
      DaysCardRef.current.classList.toggle('rotate');
    }
  }, [hours, days]);
  return (
    <div className="countdown-container">
      <CountDownCard
        label="days"
        number={days}
        cardRef={DaysCardRef}
      />
      <CountDownCard
        label="hours"
        number={hours}
        cardRef={HoursCardRef}
      />
      <CountDownCard
        label="minutes"
        number={minutes}
        cardRef={MinutesCardRef}
      />
      <CountDownCard
        label="seconds"
        number={seconds}
        cardRef={SecondsCardRef}
      />
    </div>
  );
};