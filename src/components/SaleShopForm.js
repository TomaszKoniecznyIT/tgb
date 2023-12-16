import { Form, useParams } from "react-router-dom";

import classes from "./SaleShopForm.module.css";
import { useQuery } from "@tanstack/react-query";
import { getSaleForDay } from "../util/http";
import { useState } from "react";

function SaleShopForm() {
  const params = useParams();
  const [day, setDay] = useState(new Date().toISOString().slice(0, 10));

  const { data } = useQuery({
    queryKey: ["sales", params.shopId, day],
    queryFn: ({ signal }) =>
      getSaleForDay({ signal, id: params.shopId, day: day }),
  });

  function handleOnChange(event) {
    const dateValue = event.target.value;
    console.log(dateValue, typeof dateValue);
    setDay(new Date(dateValue).toISOString().slice(0, 10));
  }

  function handlePreviousDay() {
    const newDay = new Date(day);
    setDay(
      new Date(newDay.setDate(newDay.getDate() - 1)).toISOString().slice(0, 10)
    );
  }

  function handleNextDay() {
    const newDay = new Date(day);
    setDay(
      new Date(newDay.setDate(newDay.getDate() + 1)).toISOString().slice(0, 10)
    );
  }

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>Daily Sales</h1>
        <div>
          <button type="button" onClick={handlePreviousDay}>
            previous day
          </button>
          <button type="button" onClick={handleNextDay}>
            next day
          </button>
        </div>
        <div>
          <p>
            <label htmlFor="date">Day</label>
            <input
              onChange={handleOnChange}
              id="date"
              type="date"
              name="date"
              value={day}
              required
            />
          </p>
          <p>
            <label htmlFor="number">Daily Sales</label>
            <input
              id="number"
              type="number"
              name="number"
              value={data?.total}
              required
            />
          </p>
        </div>
        <div className={classes.actions}>
          <button type="submit">Save</button>
        </div>
      </Form>
    </>
  );
}

export default SaleShopForm;
