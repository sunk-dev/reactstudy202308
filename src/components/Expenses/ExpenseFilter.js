import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = ({ selected, onChangeFilter }) => {
  const dropdownChangeHandler = (e) => {
    const selectedYear = e.target.value;
    //selectedTear가 ExpenseList에서 사용할수 있도록
    //올려보내기
    onChangeFilter(selectedYear);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
