import React from 'react';

import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import Hello from './Hello';

const App = () => {
  //지출항목 객체배열
  const expenses = [
    {
      title: '바나나',
      price: 7000,
      date: new Date(2022, 6 - 1, 21),
    },
    {
      title: '사과',
      price: 5000,
      date: new Date(2022, 7 - 1, 21),
    },
    {
      title: '그린애플',
      price: 10000,
      date: new Date(2022, 8 - 1, 21),
    },
  ];
  return (
    <>
      <ExpenseList items={expenses} />
    </>
  );
};

export default App;
