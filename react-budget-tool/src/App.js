import Expenses from "../src/components/Expenses/Expenses";
import Card from '../src/components/UI/Card';
import React from 'react';
function App() {
  const expenses = [
    {
    title: 'Car Insurance', 
    amount:'267.34', 
    date:new Date(2023,5,8)
  },
  {
    title: 'Car Payment', 
    amount:'600.34', 
    date:new Date(2023,5,8)
  },
  {
    title: 'Rent', 
    amount:'1600.34', 
    date:new Date(2023,5,1)
  },
  {
    title: 'Hulu', 
    amount:'5.99', 
    date:new Date(2023,5,1)
  }
  ]
return React.createElement(
  'div',
  {}, 
  React.createElement('h2', {}, 'Lets get Started')),
  React.createElement(Expenses, {items: expenses});


  // return (
  //   <div>
  //     <h2>Let's get started!</h2>

  //     <Expenses items = {expenses}></Expenses>
    
  //   </div>
  // );

}

export default App;
