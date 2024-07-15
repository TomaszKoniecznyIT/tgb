import { useState } from "react";
import { Form, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTargetForMonth } from "../util/http";

import classes from "./TargetShopForm.module.css";

function TargetShopForm() {
  const params = useParams();
  const [monthTraget, setMonthTarget] = useState(new Date());

  const { data } = useQuery({
    queryKey: ["target", params.shopId, monthTraget.toISOString().slice(0, 7)],
    queryFn: ({ signal }) =>
      getTargetForMonth({
        signal,
        id: params.shopId,
        month: monthTraget.toISOString().slice(0, 7),
      }),
  });

  function handleOnChange(event) {
    const dateValue = event.target.value;
    setMonthTarget(new Date(dateValue));
  }

  function handlePreviousMonth() {
    const newDay = new Date(monthTraget);
    setMonthTarget(new Date(newDay.setMonth(newDay.getMonth() - 1)));
  }

  function handleNextMonth() {
    const newDay = new Date(monthTraget);
    setMonthTarget(new Date(newDay.setMonth(newDay.getMonth() + 1)));
  }

  return (
    <>
      <Form method="put" className={classes.form}>
        <h1>Monthly Target</h1>
        <div>
          <button
            className={classes.dayButton}
            type="button"
            onClick={handlePreviousMonth}
          >
            previous month
          </button>
          <button
            className={classes.dayButton}
            type="button"
            onClick={handleNextMonth}
          >
            next month
          </button>
        </div>
        <div>
          <p>
            <label htmlFor="month">Month</label>
            <input
              onChange={handleOnChange}
              id="month"
              type="month"
              name="month"
              value={monthTraget.toISOString().slice(0, 7)}
              required
            />
          </p>
          {data && (
            <div>
              <h2>The current target for this month is: {data.target}</h2>
            </div>
          )}
          <p>
            <label htmlFor="number">Monthly Target</label>
            <input id="number" type="number" name="number" required />
          </p>
        </div>
        <div className={classes.actions}>
          <button type="submit">Save</button>
        </div>
      </Form>
    </>
  );
}

export default TargetShopForm;
