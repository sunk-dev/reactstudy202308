import React from 'react';
import './App.css';
import AppItem from './AppItem';
import NoName from './NoName';
import Hello from './Hello';

const App=()=> {
  // const $h2 = React.createElement('h2', null, '반가워요~~');
  const $h2 = <h2>반가워요~</h2>;

  return (
    <>
      <AppItem />
      <Hello/>
      <NoName />
    </>
  );
}

export default App;
