import React from 'react';
import './App.css';
import LearningBasics from './todo';
import Person from './Person';
import PersonList from './PersonList';
import Status from './Status';
import CSSProps from './CSSProps';

const Namelist = [ 
  {firstName : "hello" , lastName : "demo"} , 
  {firstName : "Hello2" , lastName : "demo2"}
]

function App() {
  return (
    <div className="App">
      <LearningBasics name='Prajjwal' number={10}
        isLoggedIn={true}
      />
      <Person name={{firstName : "hello" , lastName : "There"}} />
      <PersonList names={Namelist} />
      <Status status='loading' />
      <CSSProps styles={{border : "1px solid black" , backgroundColor : "green"}} />
     </div>
  );
}

export default App;
