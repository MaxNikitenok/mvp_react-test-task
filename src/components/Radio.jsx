'use client';

import { addRate, notification } from '../store/store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const Radio = ({ event }) => {
  const { push } = useRouter();
  const [value, setValue] = useState(null);

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const newRate = {
    id: Math.random(),
    event: event.title,
    betOn: value,
  };

  const handleClick = () => {
    addRate(newRate);
    notification.push(newRate);
    push('/');
  };

  return (
    <div>
      <label htmlFor="hosts">{`на победу хозяев (${event.hosts})`}</label>
      <input
        type="radio"
        id="hosts"
        name="radio"
        value="на победу хозяев"
        checked={value == 'на победу хозяев' ? true : false}
        onChange={changeValue}
      />
      <label htmlFor="draw">на ничью</label>
      <input
        type="radio"
        name="radio"
        id="draw"
        value="на ничью"
        checked={value == 'на ничью' ? true : false}
        onChange={changeValue}
      />
      <label htmlFor="guests">{`на победу гостей (${event.guests})`}</label>
      <input
        type="radio"
        name="radio"
        id="guests"
        value="на победу гостей"
        checked={value == 'на победу гостей' ? true : false}
        onChange={changeValue}
      />
      <button onClick={handleClick} disabled={!value}>
        сделать ставку
      </button>
    </div>
  );
};
