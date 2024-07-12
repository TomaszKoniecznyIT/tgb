import { useState } from "react";
import { useParams } from "react-router-dom";
import { getDataForReport, getTargetForMonth } from "../util/http";
import MonthReport from "./MonthReport";
import classes from "./MonthlyReportForm.module.css";

function MonthlyReportForm() {
  const [target, setTarget] = useState(null);
  const [salesData, setSalesData] = useState(null);
  const [days, setDays] = useState(null);

  const params = useParams();
  const id = params.shopId;

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const dateStart = new Date(data.month);
    data.startDate = dateStart.toISOString().slice(0, 10);
    const dateEnd = new Date(data.month);
    dateEnd.setMonth(dateEnd.getMonth() + 1);
    dateEnd.setDate(dateEnd.getDate() - 1);
    data.endDate = dateEnd.toISOString().slice(0, 10);
    setDays((dateEnd - dateStart) / (1000 * 60 * 60 * 24) + 1);

    const [responseTarget, responseSalesData] = await Promise.all([
      getTargetForMonth({ id, month: data.month }),
      getDataForReport(data.startDate, data.endDate, id),
    ]);

    setSalesData(responseSalesData);
    setTarget(responseTarget);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Report Dates</h1>
        <p>
          <label htmlFor="month">Report From</label>
          <input
            className={classes.formDate}
            id="month"
            type="month"
            name="month"
            required
          />
        </p>
        <div>
          <button className={classes.formButton} type="submit">
            Create Report
          </button>
        </div>
      </form>
      {target && salesData && days && (
        <MonthReport target={target} sales={salesData} days={days} />
      )}
      {!target && days && <p>No target has been set for this month.</p>}
    </>
  );
}

export default MonthlyReportForm;
