import React from 'react';

import ExpenseItem from './components/ExpenseItem';

const App = () => {
   //지출항목 객체배열
  const expenses=[
    {
      title:"바나나",
      price:7000,
      date:new Date(2022,6,21)
    },
    {
      title:"사과",
      price:5000,
      date:new Date(2022,7,21)
    },
    {
      title:"그린애플",
      price:10000,
      date:new Date(2022,8,21)
    }
  ]
  return (
    <>
      {/* props->문자외에 다른데이터는 중괄호 안에 넣기 */}
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
         title={expenses[1].title}
         price={expenses[1].price}
         date={expenses[1].date}
      />
      <ExpenseItem
         title={expenses[2].title}
         price={expenses[2].price}
         date={expenses[2].date}
      />
    </>
  );
};

export default App;
