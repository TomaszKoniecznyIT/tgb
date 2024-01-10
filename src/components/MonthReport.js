import DoughnutChart from "./DoughnutChart";

function MonthReport({ target, sales, days }) {
  const month = new Date(target.month);
  const monthStr = month.toLocaleString("default", { month: "long" });

  const reportArray = sales.report;
  const reportTarget = target.target;

  const totalSales = reportArray
    .map((data) => data.total)
    .reduce((sum, currentValue) => sum + currentValue, 0);
  const avgSales = totalSales / reportArray.length;

  const chartAchievementPercentage = {
    labels: ["Plan Attainment", "To Achieve The Target"],
    datasets: [
      {
        label: "Plan Attainment",
        data: [totalSales, reportTarget - totalSales],
        backgroundColor: ["orange", "grey"],
        hoverOffset: 50,
      },
    ],
  };

  return (
    <>
      <h2>Report for the store: {target.name}</h2>
      <h2>Report for the month: {monthStr}</h2>
      <h2>Target: {reportTarget}</h2>
      <h2>Total Sales: {totalSales}</h2>
      <h2>Average daily sales: {avgSales.toFixed(2)}</h2>
      <h2>
        Achievement Percentage: {((totalSales * 100) / reportTarget).toFixed(2)}
      </h2>
      <DoughnutChart chartData={chartAchievementPercentage} />
    </>
  );
}

export default MonthReport;
