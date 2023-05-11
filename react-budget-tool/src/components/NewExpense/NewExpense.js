
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {

    //This function copies the data that is inputted in the form
    const SaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData)
    }
return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler}/>
    </div>
)
}

export default NewExpense;