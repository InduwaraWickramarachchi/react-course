import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { IExpenseForm } from "./components/NewExpenseForm/ExpenseForm";

const DUMMY_EXPENSES = [
  {
    date: "2025-01-19",
    title: "Car Insurance",
    amount: "$332.43",
  },
  {
    date: "2025-01-09",
    title: "Life Insurance",
    amount: "$435.24",
  },
  {
    date: "2025-01-12",
    title: "Property Insurance",
    amount: "$1332.43",
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (newExpenseFormData: IExpenseForm) => {
    setExpenses((previousExpenses) => {
      return [newExpenseFormData, ...previousExpenses];
    });
  };

  return (
    <>
      <NewExpense onReceiveNewExpenses={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
