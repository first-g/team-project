import React from 'react'
import './Timer.css'

const Timer = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);

  const tick = () => {
    if (paused || over) return;

    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s == 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  const reset = () => {
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    setPaused(false);
    setOver(false);
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className='timer'>
      <div className="timer__main">
        <p>{`${h.toString().padStart(2, '0')}:${m
          .toString()
          .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
        <div>{over ? "Time's up!" : ''}</div>
        <div className="timer__buttons">
          <button className='timer__pause' onClick={() => setPaused(!paused)}>
            {paused ? 'Resume' : 'Pause'}
          </button>
          <button className='timer__restart' onClick={() => reset()}>Restart</button>
        </div>
      </div>
    </div>
  );
};

export default Timer