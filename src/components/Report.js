import BarChart from "./BarChart";
import classes from "./Report.module.css";

function Report({ report }) {
  const reportSorted = report.sort((a, b) => new Date(a.day) - new Date(b.day));
  const reportData = {
    labels: reportSorted.map((data) => data.day.slice(0, -13)),
    datasets: [
      {
        label: "Daily sales",
        data: reportSorted.map((data) => data.total),
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

  const totalSales = reportSorted
    .map((data) => data.total)
    .reduce((sum, currentValue) => sum + currentValue, 0);
  const avgSales = totalSales / report.length;

  return (
    <>
      <div>
        <h1>Report Data</h1>
      </div>
      <div className={classes.item}>
        <h2>Total sales for the specified period.</h2>
        <div>{totalSales.toFixed(2)}</div>
      </div>
      <div className={classes.item}>
        <h2 className={classes.reportTitle}>Average daily sales</h2>
        <div className={classes.number}>{avgSales.toFixed(2)}</div>
      </div>
      <div className={`${classes.chart} ${classes.bar}`}>
        <BarChart chartData={reportData} />
      </div>
      <ol>
        {reportSorted.map((data) => (
          <li key={data.id}>
            <div className={classes.item}>
              <h2>{data.day.slice(0, -13)}</h2>
              <div>{data.total}</div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Report;
