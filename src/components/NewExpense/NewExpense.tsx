import { FC } from "react";
import ExpenseForm, { IExpenseForm } from "../NewExpenseForm/ExpenseForm";
import "./NewExpense.css";

interface INewExpense {
  onReceiveNewExpenses: (data: IExpenseForm) => void;
}

const NewExpense: FC<INewExpense> = ({
  onReceiveNewExpenses: addExpenseHandler,
}) => {
  const saveExpenseFormHandler = (newExpenseFormData: IExpenseForm) => {
    const expenseData = {
      ...newExpenseFormData,
      id: Math.random().toString(),
    };
    addExpenseHandler(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseForm={saveExpenseFormHandler} />
    </div>
  );
};

export default NewExpense;
