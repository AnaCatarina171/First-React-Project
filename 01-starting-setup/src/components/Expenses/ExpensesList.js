import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {

  let expensesContent = <p>No expenses found.</p>

  if(props.items.length === 0){
    return <h2 className="expenses-list__fallback">Found no expenses</h2>
  }

  return <ul className="expenses-list">
    {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id} //unique identifier
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>))}
  </ul>
}

export default ExpensesList;
