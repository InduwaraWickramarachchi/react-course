import "./DateFormat.css";

function DateFormat(props: Readonly<{ date: string }>) {
  const dateObject = new Date(props.date).toDateString();
  const date = {
    day: dateObject.split(" ")[2],
    month: dateObject.split(" ")[1],
    year: dateObject.split(" ")[3],
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
