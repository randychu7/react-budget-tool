import React, {useState} from 'react';

import Expenses from "../src/components/Expenses/Expenses";
import Card from '../src/components/UI/Card';
import NewExpense from "./components/NewExpense/NewExpense";


const DummyExpenses = [
  {
    id:1,
    title: 'Car Insurance', 
    amount: 546.34, 
    date: new Date(2020, 4, 8)
  },
  {
    id:2,
    title: 'Car Payment', 
    amount: 6000.34, 
    date: new Date(2023, 4, 8)
  },
  { 
    id:3,
    title: 'Rent', 
    amount: 16000.34, 
    date: new Date(2023, 4, 1)
  },
  { 
    id:4,
    title: 'Hulu', 
    amount: 80.99, 
    date: new Date(2021, 4, 1)
  },
  { 
    id:5,
    title: 'Gym Membership', 
    amount: 305.99, 
    date: new Date(2022, 4, 1)
  }
]





const App = () => {

  const[expenses, setExpenses] = useState(DummyExpenses)

// return React.createElement(
//   'div',
//   {}, 
//   React.createElement('h2', {}, 'Lets get Started')),
//   React.createElement(Expenses, {items: expenses});

const addExpenseHandler = (expense) => {
setExpenses(prevExpenses => {
  return [expense, ...prevExpenses];
});
}

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses}></Expenses>
    
    </div>
  );

}

export default App;

