import './ExpenseDate.css';

function ExpenseDate(props) {
  let date = new Date();
  if (props.date instanceof Date) {
    date = props.date;
  } else if (typeof props.date === 'string') {
    date = new Date(props.date);
  }
  
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const day = date.toLocaleDateString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
