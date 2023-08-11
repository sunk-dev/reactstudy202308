import React, { useState } from 'react';
//css로딩
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = ({ title, price: propsPrice, date }) => {
  // let itemTitle = title;
  //값이 변경되어 화면에 반영되어야 하는 값들은
  //useState훅을 통해 상태 변수로 관리한다.
  //첫번째 요소는 관리할 상태값
  //두번쨰 요소는 상태값을 변경하는 setter함수
  const [itemTitle, setItemTitle] = useState(title);
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

  const clickHandler = (e) => {
    //state 변수는 반드시 setter를 통해서 변경하기
    // setItemTitle((snapshot)=>{
    //   console.log(`snapshot : ${snapshot}`);
    //   return '메롱'; //메롱이 새로운 값이 되며 기존 스냅샥과 다른경우 화면을 리렌더링, 같을경우 하지 않음.
    // });
    setItemTitle('메롱');
  };
  //버튼 가져오기

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">{formattedPrice}</div>
      </div>
      <button
        id="btn"
        onClick={clickHandler}
      >
        수정
      </button>
      <button
        id="btn"
        onClick={(e) => {
          alert(`삭제`);
        }}
      >
        삭제
      </button>
    </Card>
  );
};

export default ExpenseItem;
