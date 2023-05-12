import Expenses from "../src/components/Expenses/Expenses";
import Card from '../src/components/UI/Card';
import React from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
    id:1,
    title: 'Car Insurance', 
    amount:'267.34', 
    date:new Date(2023,5,8)
  },
  {id:2,
    title: 'Car Payment', 
    amount:'600.34', 
    date:new Date(2023,5,8)
  },
  { id:3,
    title: 'Rent', 
    amount:'1600.34', 
    date:new Date(2023,5,1)
  },
  { id:4,
    title: 'Hulu', 
    amount:'5.99', 
    date:new Date(2023,5,1)
  }
  ]
// return React.createElement(
//   'div',
//   {}, 
//   React.createElement('h2', {}, 'Lets get Started')),
//   React.createElement(Expenses, {items: expenses});

const addExpenseHandler = (expense) => {
console.log('In App JS');
console.log(expense)
}

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses}></Expenses>
    
    </div>
  );

}

export default App;

