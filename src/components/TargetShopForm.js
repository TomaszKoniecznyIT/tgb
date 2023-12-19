import { Form, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTargetForMonth } from "../util/http";

function TargetShopForm() {
  const params = useParams();
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));

  const { data } = useQuery({
    queryKey: ["target", params.shopId, month],
    queryFn: ({ signal }) =>
      getTargetForMonth({ signal, id: params.shopId, month: month }),
  });

  function handleOnChange(event) {
    const dateValue = event.target.value;
    console.log(dateValue, typeof dateValue);
    setMonth(new Date(dateValue).toISOString().slice(0, 7));
  }

  function handlePreviousDay() {
    const newDay = new Date(month);
    setMonth(
      new Date(newDay.setDate(newDay.getMonth() - 1)).toISOString().slice(0, 7)
    );
  }

  function handleNextDay() {
    const newDay = new Date(month);
    setMonth(
      new Date(newDay.setDate(newDay.getMonth() + 1)).toISOString().slice(0, 7)
    );
  }

  return (
    <>
      <Form method="put" className={classes.form}>
        <h1>Monthly Target</h1>
        <div>
          <button type="button" onClick={handlePreviousDay}>
            previous month
          </button>
          <button type="button" onClick={handleNextDay}>
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
              value={month}
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
