function MonthReport({ target, sales }) {
  console.log(target);
  console.log(sales);
  const month = new Date(target.responseTarget.month);
  const monthStr = month.toLocaleString("default", { month: "long" });
  return (
    <>
      <h1>Report for the store: {target.responseTarget.name}</h1>
      <h1>Report for the month: {monthStr}</h1>
    </>
  );
}

export default MonthReport;
