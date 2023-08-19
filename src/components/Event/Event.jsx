import Link from 'next/link';
import styles from './event.module.css';

export const Event = ({ item }) => {
  return (
    <Link href={`/${item.id}`}>
    <div className={styles.event}>
      <span className={styles.event__title}>{`${item.hosts} - ${item.guests}`}</span>
      <span className={styles.event__date}>{` ${item.date}`}</span>
      <span className={styles.event__time}>{` ${item.time}`}</span>
    </div>
    </Link>
  );
};
