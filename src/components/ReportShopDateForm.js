import { useParams } from "react-router-dom";
import { getDataForReport } from "../util/http";

function ReportShopDateForm() {
  const params = useParams();
  const id = params.shopId;

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    getDataForReport(data, id);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Report Dates</h1>
        <p>
          <label htmlFor="startDate">Report From</label>
          <input id="startDate" type="date" name="startDate" required />
        </p>
        <p>
          <label htmlFor="endDate">Report To</label>
          <input id="endDate" type="date" name="endDate" required />
        </p>
        <div>
          <button type="submit">Create Report</button>
        </div>
      </form>
    </>
  );
}

export default ReportShopDateForm;
