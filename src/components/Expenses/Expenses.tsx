import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";

const expense_details = [
  {
    date: new Date(),
    title: "Car Insurance",
    price: "$332.43",
  },
  {
    date: new Date(),
    title: "Life Insurance",
    price: "$435.24",
  },
  {
    date: new Date(),
    title: "Property Insurance",
    price: "$1332.43",
  },
];

function Expenses() {
  return (
    <div className="expenses">
      {expense_details.map((item) => (
        <ExpenseItem
          date={item.date}
          title={item.title}
          price={item.price}
          key={item.title}
        />
      ))}
    </div>
  );
}

export default Expenses;
