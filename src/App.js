import React from 'react';

import ExpenseItem from './components/Expenses/ExpenseItem';
import ExpenseList from './components/Expenses/ExpenseList';
import Hello from './Hello';
import NewExpense from './components/NewExpense/NewExpense';

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
  console.log(`앱실행`);
  //ExpenseForm에게 내려보낼 함수

  const addExpenseHandler = (newExpense) => {
    console.log(`app컴포넌트에서 응답함`);
    // return newExpense;
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses} />
    </>
  );
};

export default App;
