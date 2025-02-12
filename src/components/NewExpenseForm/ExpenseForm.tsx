import React, { FC, useState } from "react";
import "./ExpenseForm.css";

export interface IExpenseForm {
  date: string;
  title: string;
  amount: string;
  id?: string;
}

interface IFormProps {
  onSubmitExpenseForm: (data: IExpenseForm) => void;
}

const ExpenseForm: FC<IFormProps> = ({
  onSubmitExpenseForm: saveExpenseFormHandler,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const onDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const expenseData: IExpenseForm = {
      title: title,
      amount: amount,
      date: date,
    };
    saveExpenseFormHandler(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" value={title} onChange={onTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            value={amount}
            onChange={onAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" value={date} onChange={onDateHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
