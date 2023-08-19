'use client';

import styles from './page.module.css';
import { Event } from '../components/Event/Event';
import { data, getRates, notification } from '../store/store';
import moment from 'moment/moment';
import 'moment/locale/ru';
import { useEffect, useState } from 'react';

moment.locale('ru');

const now = moment();

const currentEvents = data.filter((event) => {
  return event.date === now.format('DD MMMM');
});

const upcomingEvents = data.filter((event) => {
  return event.date > now.format('DD MMMM');
});

export default function Home() {
  const [rateNotification, setRateNotification] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  const clearRateNotification = () => {
    setRateNotification(null);
  };

  const hideNotification = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    if (rateNotification === null) {
      setRateNotification(notification.at(0));
      notification.length = 0;

      setTimeout(clearRateNotification, 9000);
    }
    if (rateNotification) {
      setShowNotification(true);
      setTimeout(hideNotification, 5000);
    }
  }, [rateNotification]);

  return (
    <main className={styles.main}>
      <div
        className={
          showNotification ? styles.notificationOn : styles.notificationOff
        }
      >
        {rateNotification && (
          <div>
            Спасибо, ваша ставка в матче{' '}
            <b>
              {rateNotification.event} {rateNotification.betOn}
            </b>{' '}
            принята
          </div>
        )}
      </div>
      <div className={styles.events}>
        <div className={styles.currentEvents}>
          <div className={styles.events__title}>Текущие</div>
          <div className={styles.currentEvents__football}>
            <h4 className={styles.title}>ФУТБОЛ</h4>
            <ul className={styles.eventsItems}>
              {currentEvents.map((item) => {
                if (item.type === 'football')
                  return (
                    <li className={styles.eventsItem} key={item.id}>
                      <Event item={item} />
                    </li>
                  );
              })}
            </ul>
          </div>
          <div className={styles.currentEvents__hockey}>
            <h4 className={styles.title}>ХОКЕЙ</h4>
            <ul className={styles.eventsItems}>
              {currentEvents.map((item) => {
                if (item.type === 'hockey')
                  return (
                    <li className={styles.eventsItem} key={item.id}>
                      <Event item={item} />
                    </li>
                  );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.upcomingEvents}>
          <div className={styles.events__title}>Предстоящие</div>
          <div className={styles.upcomingEvents__football}>
            <h4 className={styles.title}>ФУТБОЛ</h4>
            <ul className={styles.eventsItems}>
              {upcomingEvents.map((item) => {
                if (item.type === 'football')
                  return (
                    <li className={styles.eventsItem} key={item.id}>
                      <Event item={item} />
                    </li>
                  );
              })}
            </ul>
          </div>
          <div className={styles.upcomingEvents__hockey}>
            <h4 className={styles.title}>ХОКЕЙ</h4>
            <ul className={styles.eventsItems}>
              {upcomingEvents.map((item) => {
                if (item.type === 'hockey')
                  return (
                    <li className={styles.eventsItem} key={item.id}>
                      <Event item={item} />
                    </li>
                  );
              })}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
