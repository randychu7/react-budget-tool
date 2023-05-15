import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import '../Expenses/Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "../Filter/Filter";

function Expenses(props){

 const [filteredYear, setFilteredYear] = useState('2020');
 
      //This function copies the data that is inputted in the form
      const FilterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
        // props.filterSelect(filteredYear);
    };
    
    //Filter Method
    const filteredExpenses = props.items.filter(expense =>{
      return expense.date.getFullYear().toString() === filteredYear;
    });
    // {props.items.map(expense => <Expense/>)} turns the object to an JSX element maps every expense into 
 return(
  <div>
    

    <Card className="expenses">
    <ExpensesFilter 
    selected = {filteredYear} 
    onFilterChange = {FilterChangeHandler} />
     
     {filteredExpenses.length === 0}
     {filteredExpenses.map((expense) => (
     <ExpenseItem 
     key={expense.id}
     title = {expense.title} 
     amount={expense.amount} 
     date={expense.date}/>))}

     
     
     
      
    </Card>
    </div>
 )
}

export default Expenses;













