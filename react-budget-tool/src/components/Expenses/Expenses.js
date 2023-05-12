import ExpenseItem from "./ExpenseItem";
import '../Expenses/Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "../Filter/Filter";

function Expenses(props){


      //This function copies the data that is inputted in the form
      const onFilterChange = (filteredYear) =>{
        props.filterSelect(filteredYear);
    };
    

 return(
    <Card className="expenses">
      <div>
        <ExpensesFilter filterSelect = {onFilterChange} />
      <ExpenseItem 
      title={props.items[0].title} 
      amount={props.items[0].amount} 
      date = {props.items[0].date}>
      </ExpenseItem>

      <ExpenseItem 
      title={props.items[1].title} 
      amount={props.items[1].amount} 
      date = {props.items[1].date}>
      </ExpenseItem>

      <ExpenseItem 
      title={props.items[2].title} 
      amount={props.items[2].amount} 
      date = {props.items[2].date}>
      </ExpenseItem>
      <ExpenseItem 
      title={props.items[3].title} 
      amount={props.items[3].amount} 
      date = {props.items[3].date}>
      </ExpenseItem>
      </div>
    </Card>
 )
}

export default Expenses;













