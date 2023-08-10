import React from 'react';
//css로딩
import './ExpenseItem.css';
const ExpenseItem = () => {
  const expenseDate = new Date(2023, 8, 4);
  const expenseTitle='냠냠치킨';
  const expensePrice=19000;

  //1자리 숫자를 2자리수로 변환하는 함수
  const make2digit=(text)=>
  {
    return text.toString().padStart(2,'0');
  }

  //날짜포맷팅 변환 함수 정의
  const makeDateFormattedDate=()=>{
    const year=expenseDate.getFullYear();
    const month=expenseDate.getMonth();
    const date=expenseDate.getDate();
    return `${year}년 ${make2digit(month)}월 ${make2digit(date)}일`;
  }
  //숫자를 원화 표기법으로 바꾸기
  const formattedPrice=new Intl.NumberFormat('ko-KR').format(expensePrice);
  return (
    <div className="expense-item">
      <div>{makeDateFormattedDate()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{formattedPrice}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
