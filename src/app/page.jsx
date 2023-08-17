import styles from './page.module.css';
import { Event } from '../components/Event';
import { data } from '../data/data';
import moment from 'moment/moment';
import 'moment/locale/ru';

moment.locale('ru')

const now = moment();

const currentEvents = data.filter((event) => {
  return event.date === now.format('DD MMMM');
});

const upcomingEvents = data.filter((event) => {
  return event.date > now.format('DD MMMM');
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div classNam={styles.currentEvents}>
        <div>Текущие</div>
        <div className={styles.currentEvents__football}>
          <h4>ФУТБОЛ</h4>
          <ul>
            {currentEvents.map((item) => {
              if (item.type === 'football')
                return (
                  <li key={item.id}>
                    <Event item={item} />
                  </li>
                );
            })}
          </ul>
        </div>
        <div className={styles.currentEvents__hockey}>
          <h4>ХОКЕЙ</h4>
          <ul>
            {currentEvents.map((item) => {
              if (item.type === 'hockey')
                return (
                  <li key={item.id}>
                    <Event item={item} />
                  </li>
                );
            })}
          </ul>
        </div>
      </div>
      <div classNam={styles.upcomingEvents}>
      <div>Предстоящие</div>
        <div className={styles.upcomingEvents__football}>
          <h4>ФУТБОЛ</h4>
          <ul>
            {upcomingEvents.map((item) => {
              if (item.type === 'football')
                return (
                  <li key={item.id}>
                    <Event item={item} />
                  </li>
                );
            })}
          </ul>
        </div>
        <div className={styles.upcomingEvents__hockey}>
          <h4>ХОКЕЙ</h4>
          <ul>
            {upcomingEvents.map((item) => {
              if (item.type === 'hockey')
                return (
                  <li key={item.id}>
                    <Event item={item} />
                  </li>
                );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}
