import { FC } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import { IExpenseForm } from "../NewExpenseForm/ExpenseForm";

interface IExpenses {
  expenses: IExpenseForm[];
}

const Expenses: FC<IExpenses> = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((item) => (
        <ExpenseItem
          date={item.date}
          title={item.title}
          amount={item.amount}
          key={item.title}
        />
      ))}
    </div>
  );
};

export default Expenses;
