import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { IExpenseForm } from "./components/NewExpenseForm/ExpenseForm";

function App() {
  const addExpenseHandler = (newExpenseFormData: IExpenseForm) => {
    console.log("app");
    console.log(newExpenseFormData);
  };

  return (
    <>
      <NewExpense onReceiveNewExpenses={addExpenseHandler} />
      <Expenses />
    </>
  );
}

export default App;
