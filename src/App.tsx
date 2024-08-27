import React from 'react';
import './App.css';
import LearningBasics from './todo';
import Person from './Person';
import PersonList from './PersonList';
import Status from './Status';

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
     </div>
  );
}

export default App;
