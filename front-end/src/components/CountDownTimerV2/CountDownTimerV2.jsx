import React, { useEffect, useRef, useState } from 'react';

import { CountDownCard } from '../CountDownCard';

import './CountDownTimerV2.css';

import { getCurrentTimeInVietnam, calculateDateDifferenceVN } from '../../utils/timeUtil';

export const CountDownTimerV2 = ({date = getCurrentTimeInVietnam()}) => {

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
      const targetDate = date;
      const currentVietnamTime = getCurrentTimeInVietnam();

      const remainingTime = calculateDateDifferenceVN(currentVietnamTime, targetDate);

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
    }

    if (minutes === 0 && hours > 0) setMinutes(59);

    if (seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }   
  }, [seconds, minutes, hours]);

  useEffect(() => {
    if (hours === 0 && days > 0) setHours(23);

    if (minutes === 0 && hours > 0) {
      setHours(hours - 1);
    }
  }, [minutes, hours, days]);

  useEffect(() => {
    if (hours === 0 && days > 0){
      setDays(days - 1)
    }
  }, [hours, days]);
  return (
    <div className="countdown-container-v2">
      <p className="text">We will close this form in</p>
      <div className="countdown-cards">
        <CountDownCard
          label="days"
          number={days}
          cardRef={DaysCardRef}
        />
        <p className="colon">:</p>
        <CountDownCard
          label="hours"
          number={hours}
          cardRef={HoursCardRef}
        />
        <p className="colon">:</p>
        <CountDownCard
          label="minutes"
          number={minutes}
          cardRef={MinutesCardRef}
        />
        <p className="colon">:</p>
        <CountDownCard
          label="seconds"
          number={seconds}
          cardRef={SecondsCardRef}
        />
      </div>
    </div>
  );
};