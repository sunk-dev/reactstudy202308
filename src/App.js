import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css'
const App = () => {
  //지출항목 객체배열

  return (
    <div>
      <section id="goal-form">
        <CourseInput />
      </section>
      <section id="goals">
        <CourseList />
      </section>
    </div>
  );
};

export default App;
