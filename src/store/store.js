export const data = [
  {
    id: 1,
    type: 'football',
    title: 'Фулхэм - Брентфорд',
    date: '17 августа',
    time: '17:00',
    hosts: 'Фулхэм',
    guests: 'Брентфорд',
  },
  {
    id: 2,
    type: 'football',
    title: 'Барселона - Кадис',
    date: '20 августа',
    time: '20:30',
    hosts: 'Барселона',
    guests: 'Кадис',
  },
  {
    id: 3,
    type: 'football',
    title: 'Вест Хэм - Челси',
    date: '20 августа',
    time: '18:30',
    hosts: 'Вест Хэм',
    guests: 'Челси',
  },
  {
    id: 4,
    type: 'football',
    title: 'Ньюкасл - Ливерпуль',
    date: '27 августа',
    time: '18:30',
    hosts: 'Ньюкасл',
    guests: 'Ливерпуль',
  },
  {
    id: 5,
    type: 'hockey',
    title: 'Пеликанс Лахти - Векшё',
    date: '31 августа',
    time: '18:30',
    hosts: 'Пеликанс Лахти',
    guests: 'Векшё',
  },
  {
    id: 6,
    type: 'hockey',
    title: 'РБ Мюнхен - Дюссельдорфер',
    date: '14 августа',
    time: '20:30',
    hosts: 'РБ Мюнхен',
    guests: 'Дюссельдорфер',
  },
  {
    id: 7,
    type: 'football',
    title: 'АЕК Афины — Динамо Загреб',
    date: '19 августа',
    time: '21:45',
    hosts: 'АЕК Афины',
    guests: 'Динамо Загреб',
  },
  {
    id: 8,
    type: 'football',
    title: 'Ноттингем Форест — Шеффилд Юнайтед',
    date: '18 августа',
    time: '21:45',
    hosts: 'Ноттингем Форест',
    guests: 'Шеффилд Юнайтед',
  },
  {
    id: 9,
    type: 'hockey',
    title: 'СКА-Нева — ХК Норильск',
    date: '18 августа',
    time: '19:00',
    hosts: 'СКА-Нева',
    guests: 'ХК Норильск',
  },
  {
    id: 10,
    type: 'hockey',
    title: 'Сокол Красноярск — ХК Хумо',
    date: '19 августа',
    time: '11:00',
    hosts: 'Сокол Красноярск',
    guests: 'ХК Хумо',
  },
];

const rates = [];

export const addRate = (rate) => {
  rates.push(rate);
};

export const notification = [];
