import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = ({onSaveExpense}) => {
  const [userInput, setuserInput] = useState({
    title: '',
    price: '',
    date: '',
  });

  const titleChangeHandler = (e) => {
    // const foo=()=>({}); ->빈객체를 리턴한다
    setuserInput((preUserInput) => ({
      ...preUserInput,
      title: e.target.value,
    }));
  };
  const priceChangeHandler = (e) => {
    setuserInput({
      ...userInput,
      price: e.target.value,
    });
  };
  const dateChangeHandler = (e) => {
    setuserInput({
      ...userInput,
      date: e.target.value,
    });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault(); //submit차단
    console.log(`제출 버튼 누름`);
    console.log(userInput);
    onSaveExpense(userInput);

    // console.log(newExpense);
    // //입력창리셋
    setuserInput({
      title: '',
      price: '',
      date: '',
    });
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="100"
            step="100"
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
