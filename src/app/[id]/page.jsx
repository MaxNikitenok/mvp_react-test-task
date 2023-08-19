import Link from 'next/link';
import styles from './page.module.css';
import { data } from '../../store/store';
import { Radio } from '../../components/Radio/Radio';

export default function EventDetails({ params }) {
  const eventObj = data.find((event) => {
    return event.id == params.id;
  });

  return (
    <div className={styles.details}>
      <div className={styles.details__title}>{eventObj.title}</div>
      <div className={styles.details__date}>{eventObj.date}</div>
      <div className={styles.details__time}>{eventObj.time}</div>
      <div className={styles.details__hosts}>Хозяева: {eventObj.hosts.name}</div>
      <div className={styles.details__guests}>Гости: {eventObj.guests.name}</div>
      <Radio event={eventObj} />
      <Link className={styles.backHome} href="/">
        Вернутся на главную
      </Link>
    </div>
  );
}
