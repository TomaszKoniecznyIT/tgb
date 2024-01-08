import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataForReport, getTargetForMonth } from "../util/http";

function MonthlyReportForm() {
  const [target, setTarget] = useState(null);
  const [salesData, setSalesData] = useState(null);
  const [month, setMonth] = useState(new Date());
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
    console.log(data);

    const [responseTarget, responseSalesData] = await Promise.all([
      getTargetForMonth({ id, month: data.month }),
      getDataForReport(data.startDate, data.endDate, id),
    ]);

    setTarget({ responseTarget });
    setSalesData({ responseSalesData });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Report Dates</h1>
        <p>
          <label htmlFor="month">Report From</label>
          <input id="month" type="month" name="month" required />
        </p>
        <div>
          <button type="submit">Create Report</button>
        </div>
      </form>
    </>
  );
}

export default MonthlyReportForm;
