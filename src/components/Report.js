import BarChart from "./BarChart";

function Report({ report }) {
  const reportData = {
    labels: report.map((data) => data.day.slice(0, -13)),
    datasets: [
      {
        label: "Daily sales",
        data: report.map((data) => data.total),
        backgroundColor: [
          "yellow",
          "red",
          "green",
          "blue",
          "orange",
          "brown",
          "purple",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

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
                <h2>{data.day.slice(0, -13)}</h2>
                <h3>{data.total}</h3>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <h1>Total sales for the specified period.</h1>
      <div>{totalSales.toFixed(2)}</div>
      <h1>Average daily sales</h1>
      <div>{avgSales.toFixed(2)}</div>
      <div>
        <BarChart chartData={reportData} />
      </div>
    </>
  );
}

export default Report;
