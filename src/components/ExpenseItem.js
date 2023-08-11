import React from 'react';
//css로딩
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';
const ExpenseItem = ({ title, price: propsPrice, date }) => {
  //1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };

  //날짜포맷팅 변환 함수 정의
  const makeDateFormattedDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };
  //숫자를 원화 표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(propsPrice);
  
 const clickHandler=e=>{
  console.log('버튼 클릭함');
  console.log(e.target);
 }
  //버튼 가져오기
 
  
  return (
   
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{formattedPrice}</div>
        </div>
        <button id='btn' onClick={clickHandler}>수정</button>
        <button id='btn' onClick={e=>{alert(`삭제`)}}>삭제</button>
      </Card>
  );
};

export default ExpenseItem;
