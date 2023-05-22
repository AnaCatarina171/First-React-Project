import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [openAddExpense, setopenAddExpense] = useState(false);
    let newExpenseForm;

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setopenAddExpense(false);
        console.log(expenseData);
    }

    const showNewExpenseForm = () => {
        setopenAddExpense(true);
    }

    
    const cancelForm = () => {
        setopenAddExpense(false);
    }

    if(!openAddExpense){
        newExpenseForm = <button onClick={showNewExpenseForm}>Add Expense</button>
    }
    else{
        newExpenseForm = <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler} 
            onCancel={cancelForm}></ExpenseForm>
    }

    return <div className='new-expense'>
        {newExpenseForm}
    </div>
};

export default NewExpense;