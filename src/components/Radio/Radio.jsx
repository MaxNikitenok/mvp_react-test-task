'use client';

import styles from './radio.module.css';
import { addRate, notification } from '../../store/store';
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
    <>
      <div className={styles.radio}>
        <label htmlFor="hosts" className={value == 'на победу хозяев' ? styles.activeRadioLabel : styles.radioLabel}>
          {event.hosts}
        </label>
        <input
          className={styles.radioInput}
          type="radio"
          id="hosts"
          name="radio"
          value="на победу хозяев"
          checked={value == 'на победу хозяев' ? true : false}
          onChange={changeValue}
        />
        <label htmlFor="draw" className={value == 'на ничью' ? styles.activeRadioLabel : styles.radioLabel}>
          Ничья
        </label>
        <input
          className={styles.radioInput}
          type="radio"
          name="radio"
          id="draw"
          value="на ничью"
          checked={value == 'на ничью' ? true : false}
          onChange={changeValue}
        />
        <label htmlFor="guests" className={value == 'на победу гостей' ? styles.activeRadioLabel : styles.radioLabel}>
          {event.guests}
        </label>
        <input
          className={styles.radioInput}
          type="radio"
          name="radio"
          id="guests"
          value="на победу гостей"
          checked={value == 'на победу гостей' ? true : false}
          onChange={changeValue}
        />
      </div>
      <button className={styles.button} onClick={handleClick} disabled={!value}>
        сделать ставку
      </button>
    </>
  );
};
