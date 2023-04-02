import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, {useState} from 'react';

function ExpenseItem(props) {
  //A component is just a JS function

  /*const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;*/

  const [title, setTitle] = useState(props.title); //react hook (start with use, and is called inside component functions)

  const clickHandler = () => { //event handler functions should end with 'handler'
    setTitle('Updated!'); //components will be executed again after calling 'setTitle'
  }

  return (
    <li>
      <Card className='expense-item'>
      <div>
        <ExpenseDate date={props.date}/>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
