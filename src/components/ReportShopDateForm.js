import { Form } from "react-router-dom";

function ReportShopDateForm() {
  return (
    <>
      <Form>
        <h1>Report Dates</h1>
        <p>
          <label htmlFor="start">Report From</label>
          <input id="start" type="date" name="start" required />
        </p>
        <p>
          <label htmlFor="end">Report To</label>
          <input id="end" type="date" name="end" required />
        </p>
        <div>
          <button type="submit">Create Report</button>
        </div>
      </Form>
    </>
  );
}

export default ReportShopDateForm;
