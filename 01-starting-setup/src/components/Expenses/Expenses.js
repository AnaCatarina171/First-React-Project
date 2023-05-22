import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter.js";
import Card from "../UI/Card.js";
import "./Expenses.css";
import ExpensesList from "./ExpensesList.js";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("0");

  const filterChangeHandler = (yearSelected) => {
    setFilteredYear(yearSelected);
  };

  const filteredExpenses = props.expenses.filter((exp) => {
    if(filteredYear === "0"){
      return exp.date.getFullYear() != filteredYear;
    }
    return exp.date.getFullYear() == filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearSelected={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
