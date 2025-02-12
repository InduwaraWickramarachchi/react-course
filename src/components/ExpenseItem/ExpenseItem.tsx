import { useState } from "react";
import DateFormat from "../DateFormat/DateFormat";
import "./ExpenseItem.css";
import { IExpenseForm } from "../NewExpenseForm/ExpenseForm";

function ExpenseItem(props: Readonly<IExpenseForm>) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <div className="expense-item">
      <DateFormat date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> {props.amount} </div>
      </div>
      <button onClick={clickHandler}>change Title</button>
    </div>
  );
}

export default ExpenseItem;
