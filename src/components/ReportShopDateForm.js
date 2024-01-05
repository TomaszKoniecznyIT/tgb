import { Form, useParams } from "react-router-dom";
import { getDataForReport } from "../util/http";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function ReportShopDateForm() {
  const params = useParams();
  const [dayStart, setDayStart] = useState();
  const [dayEnd, setDayEnd] = useState();

  const { data } = useQuery({
    queryKey: ["report", params.shopId, dayStart, dayEnd],
    queryFn: ({ signal }) =>
      getDataForReport({
        signal,
        id: params.shopId,
        start: dayStart.toISOString().slice(0, 10),
        end: dayEnd.toISOString().slice(0, 10),
      }),
  });

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
