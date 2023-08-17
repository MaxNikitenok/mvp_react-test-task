import Link from 'next/link';
import styles from './page.module.css';
import { data } from '../../data/data';
import { Radio } from '../../components/Radio';

export default function EventDetails({ params }) {
  const eventObj = data.find((event) => {
    return event.id == params.id;
  });
  return (
    <>
      <div className={styles.details}>{eventObj.title}</div>
      <div className={styles.details}>{eventObj.date}</div>
      <div className={styles.details}>{eventObj.time}</div>
      <div className={styles.details}>Хозяева: {eventObj.hosts}</div>
      <div className={styles.details}>Гости: {eventObj.guests}</div>
      <Radio event={eventObj} />
      <Link href="/">Home</Link>
    </>
  );
}
