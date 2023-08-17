import Link from 'next/link';
import styles from './event.module.css';

export const Event = ({ item }) => {
  return (
    <Link href={`/${item.id}`}>
    <div className={styles.event}>
      <div className={styles.event__title}>{`${item.hosts} - ${item.guests}`}</div>
      <div className={styles.event__date}>{item.date}</div>
      <div className={styles.event__time}>{item.time}</div>
    </div>
    </Link>
  );
};
