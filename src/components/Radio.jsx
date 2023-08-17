'use client';

import { useRouter } from 'next/navigation';
import Snackbar from '@material-ui/core/Snackbar';
import { useState } from 'react';

export const Radio = ({ event }) => {
  const { push } = useRouter();
  const [value, setValue] = useState(null);

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = () => () => {
    setState({ open: true, vertical: 'top', horizontal: 'center' });
    push('/');
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <label htmlFor="hosts">на победу хозяев</label>
      <input
        type="radio"
        name="radio"
        id="hosts"
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
      <label htmlFor="guests">на победу гостей</label>
      <input
        type="radio"
        name="radio"
        id="guests"
        value="на победу гостей"
        checked={value == 'на победу гостей' ? true : false}
        onChange={changeValue}
      />
      <button onClick={handleClick()} disabled={!value}>
        сделать ставку
      </button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={`Спасибо ставка в матче ${event.hosts} - ${event.guests} ${value} сделана`}
        key={vertical + horizontal}
      />
    </div>
  );
};
