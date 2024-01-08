function Report({ report }) {
  const totalSales = report
    .map((data) => data.total)
    .reduce((sum, currentValue) => sum + currentValue, 0);
  const avgSales = totalSales / report.length;
  return (
    <>
      <div>
        <h1>Report Dane</h1>
        <ol>
          {report.map((data) => (
            <li key={data.id}>
              <div>
                <h2>{data.day}</h2>
                <h3>{data.total}</h3>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <h1>Total sales for the specified period.</h1>
      <div>{totalSales}</div>
      <h1>Average daily sales</h1>
      <div>{avgSales.toFixed(2)}</div>
    </>
  );
}

export default Report;
