import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  /*const para = document.createElement('p');
  para.textContent = 'This is also visible';
  document.getElementById("root").append(para); //Regular JS */

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpensehandler = (expense) => {
    setExpenses((prevExpenses) => {
        console.log(prevExpenses);
        return [expense, ...prevExpenses];
      });
  }

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started!"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  return ( /* JSX - JavaScript Xml */
    <div>
      <NewExpense onAddExpense={addExpensehandler}></NewExpense>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
