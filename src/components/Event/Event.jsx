import Link from 'next/link';
import styles from './event.module.css';
import moment from 'moment';

export const Event = ({ item }) => {
  return (
    <Link href={`/${item.id}`}>
    <div className={styles.event}>
      <div className={styles.event__title}>{`${item.hosts.name} - ${item.guests.name}`}</div>
      <span className={styles.event__date}>{` ${moment(item.date, ["DD-MM-YYYY"]).format('D MMMM')}`}</span>
      <span className={styles.event__time}>{` ${item.time}`}</span>
    </div>
    </Link>
  );
};
