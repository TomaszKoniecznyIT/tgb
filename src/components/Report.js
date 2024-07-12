import BarChart from "./BarChart";
import classes from "./Report.module.css";

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
        <h1>Report Data</h1>
      </div>
      <div className={classes.item}>
        <h1 className={classes.reportTitle}>
          Total sales for the specified period.
        </h1>
        <div>{totalSales.toFixed(2)}</div>
      </div>
      <div className={classes.item}>
        <h1 className={classes.reportTitle}>Average daily sales</h1>
        <div>{avgSales.toFixed(2)}</div>
      </div>
      <div className={classes.chart}>
        <BarChart chartData={reportData} />
      </div>
      <ol>
        {report.map((data) => (
          <li key={data.id} className={classes.item}>
            <div>
              <h2>{data.day.slice(0, -13)}</h2>
              <h3>{data.total}</h3>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Report;
