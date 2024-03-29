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

  const mon = reportArray
    .filter((data) => data.day.slice(0, 3) === "Mon")
    .map((data) => data.total)
    .reduce((sum, currentValue) => sum + currentValue, 0);

  function averageSalesPerDayOfWeek(dayOfWeek, reportArr) {
    const reportForDayOfWeek = reportArr.filter(
      (data) => data.day.slice(0, 3) === dayOfWeek
    );
    const howManyDays = reportForDayOfWeek.length;
    const totalForDayOfWeek = reportForDayOfWeek
      .map((data) => data.total)
      .reduce((sum, currentValue) => sum + currentValue, 0);
    if (howManyDays > 0) return totalForDayOfWeek / howManyDays;
    return 0;
  }

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

  const dataForProcentage =
    totalSales < reportTarget
      ? [
          (totalSales * 100) / reportTarget,
          100 - (totalSales * 100) / reportTarget,
        ]
      : [100, 0];
  const chartAchievementPercentage = {
    labels: ["Plan Attainment %"],
    datasets: [
      {
        label: "Plan Attainment",
        data: dataForProcentage,
        backgroundColor: ["green", "transparent"],
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

  const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const reportAvgSalesPerDay = {
    labels: dayOfWeek,
    datasets: [
      {
        label: "Day of the week",
        data: dayOfWeek.map((day) =>
          averageSalesPerDayOfWeek(day, reportArray)
        ),
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
      <DoughnutChart chartData={chartTargetAchievement} />
      <h2>
        Achievement Percentage: {((totalSales * 100) / reportTarget).toFixed(2)}{" "}
        %
      </h2>
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
      <h2>Average daily sales on a weekday</h2>
      <BarChart chartData={reportAvgSalesPerDay} />
    </>
  );
}

export default MonthReport;
