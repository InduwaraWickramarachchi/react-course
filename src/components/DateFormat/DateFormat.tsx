import "./DateFormat.css";

function DateFormat(props: Readonly<{ date: Date }>) {
  const date = {
    day: props.date.toLocaleString("en-US", { day: "2-digit" }),
    month: props.date.toLocaleString("en-US", { month: "long" }),
    year: props.date.getFullYear(),
  };
  return (
    <div className="expense-date">
      <div className="expense-date__month">{date.month}</div>
      <div className="expense-date__year">{date.year}</div>
      <div className="expense-date__day">{date.day}</div>
    </div>
  );
}

export default DateFormat;
