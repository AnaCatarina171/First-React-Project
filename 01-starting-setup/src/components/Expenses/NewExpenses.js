import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter.js";
import Card from "../UI/Card";
import "./NewExpenses.css";
import ExpensesList from "./ExpensesList";

function NewExpenses(props) {
  const [filteredYear, setFilteredYear] = useState("0");

  const filterChangeHandler = (yearSelected) => {
    setFilteredYear(yearSelected);
  };

  const filteredExpenses = props.expenses.filter((exp) => {
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

export default NewExpenses;
