import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import classes from "./MonthReport.module.css";

function MonthReport({ target, sales, days }) {
  const month = new Date(target.month);
  const monthStr = month.toLocaleString("default", { month: "long" });

  const reportArray = sales.report.sort(
    (a, b) => new Date(a.day) - new Date(b.day)
  );
  const reportTarget = target.target;
  const daysInMonth = days;
  const avgSalesTarget = reportTarget / daysInMonth;

  const totalSales = reportArray
    .map((data) => data.total)
    .reduce((sum, currentValue) => sum + currentValue, 0);
  const avgSales = totalSales / reportArray.length;

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
      <div className={classes.item}>
        <h2>Report for the store:</h2>
        <div>{target.name}</div>
      </div>

      <div className={classes.item}>
        <h2>Report for the month: </h2>
        <div>{monthStr}</div>
      </div>

      <div className={classes.item}>
        <h2>Target: </h2>
        <div>{reportTarget}</div>
      </div>

      <div className={classes.item}>
        <h2>Total Sales: </h2>
        <div>{totalSales.toFixed(2)}</div>
      </div>

      <div>
        <h2>Average daily sales: </h2>
        <div>{avgSales.toFixed(2)}</div>
      </div>

      <div className={classes.chart}>
        <DoughnutChart chartData={chartTargetAchievement} />
      </div>

      <h2>
        Achievement Percentage: {((totalSales * 100) / reportTarget).toFixed(2)}{" "}
        %
      </h2>

      <div className={classes.chart}>
        <DoughnutChart chartData={chartAchievementPercentage} />
      </div>

      {daysInMonth - reportArray.length !== 0 && (
        <div className={classes.item}>
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

      <h2>Daily Sales</h2>
      <div className={classes.chart}>
        <BarChart chartData={reportSales} />
      </div>

      <h2>Daily sales to average daily target</h2>
      <div className={classes.chart}>
        <BarChart chartData={reportSalesToTarget} />
      </div>

      <h2>Average daily sales on a weekday</h2>
      <div className={classes.chart}>
        <BarChart chartData={reportAvgSalesPerDay} />
      </div>
    </>
  );
}

export default MonthReport;
