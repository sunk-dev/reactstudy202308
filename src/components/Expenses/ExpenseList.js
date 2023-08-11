import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const ExpenseList = ({items}) => {

  const filterChangeHandler = (selectedYear) => {
    console.log(`ExpenseList 컴포넌트에서 응답함`);
    console.log(selectedYear);
  };
  return (
    <Card className='expenses'>
      <ExpenseFilter onChangeFilter={filterChangeHandler}/>
      {/* props->문자외에 다른데이터는 중괄호 안에 넣기 */}
      <ExpenseItem
        title={items[0].title}
        price={items[0].price}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        price={items[1].price}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[2].title}
        price={items[2].price}
        date={items[2].date}
      />
    </Card>
  );
};

export default ExpenseList;
