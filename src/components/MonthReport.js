import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";

function MonthReport({ target, sales, days }) {
  const month = new Date(target.month);
  const monthStr = month.toLocaleString("default", { month: "long" });

  const reportArray = sales.report;
  const reportTarget = target.target;
  const daysInMonth = days;
  const avgSalesTarget = reportTarget / daysInMonth;

  const totalSales = reportArray
    .map((data) => data.total)
    .reduce((sum, currentValue) => sum + currentValue, 0);
  const avgSales = totalSales / reportArray.length;

  const chartTargetAchievement = {
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

  const chartAchievementPercentage = {
    labels: ["Plan Attainment"],
    datasets: [
      {
        label: "Plan Attainment",
        data: [(totalSales * 100) / reportTarget],
        backgroundColor: ["green"],
        hoverOffset: 50,
      },
    ],
  };

  const reportSales = {
    labels: reportArray.map((data) => data.day.slice(0, -13)),
    datasets: [
      {
        label: `Daily sales`,
        data: reportArray.map((data) => data.total),
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

  const reportSalesToTarget = {
    labels: reportArray.map((data) => data.day.slice(0, -13)),
    datasets: [
      {
        label: `Daily sales`,
        data: reportArray.map((data) => data.total - avgSalesTarget.toFixed(2)),
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

  return (
    <>
      <h2>Report for the store: {target.name}</h2>
      <h2>Report for the month: {monthStr}</h2>
      <h2>Target: {reportTarget}</h2>
      <h2>Total Sales: {totalSales}</h2>
      <h2>Average daily sales: {avgSales.toFixed(2)}</h2>
      <h2>
        Achievement Percentage: {((totalSales * 100) / reportTarget).toFixed(2)}{" "}
        %
      </h2>
      <DoughnutChart chartData={chartTargetAchievement} />
      <DoughnutChart chartData={chartAchievementPercentage} />
      <div>
        {daysInMonth - reportArray.length !== 0 && (
          <div>
            <h2>The average daily needed to reach the target.</h2>
            <p>
              {daysInMonth - reportArray.length !== 0 &&
                (
                  (reportTarget - totalSales) /
                  (daysInMonth - reportArray.length)
                ).toFixed(2)}
            </p>
          </div>
        )}
      </div>
      <h2>Daily Sales</h2>
      <BarChart chartData={reportSales} />
      <h2>Daily sales to average daily target</h2>
      <BarChart chartData={reportSalesToTarget} />
    </>
  );
}

export default MonthReport;
