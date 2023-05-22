import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter.js";
import Card from "../UI/Card.js";
import "./Expenses.css";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("0");

  const filterChangeHandler = (yearSelected) => {
    setFilteredYear(yearSelected);
  };

  const filteredExpenses = props.expenses.filter((exp) => {
    if(filteredYear === "0"){
      return exp.date.getFullYear().toString() !== filteredYear;
    }
    return exp.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearSelected={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
