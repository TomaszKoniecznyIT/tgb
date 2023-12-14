import { Form, useParams } from "react-router-dom";

import classes from "./SaleShopForm.module.css";
import { useQuery } from "@tanstack/react-query";
import { getSaleForDay } from "../util/http";

function SaleShopForm() {
  const params = useParams();
  const day = new Date().toISOString().slice(0, 10);

  const { data } = useQuery({
    queryKey: ["sales", params.shopId],
    queryFn: () => getSaleForDay({ id: params.shopId, day: day }),
  });

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>Daily Sales</h1>
        <p>
          <label htmlFor="date">Day</label>
          <input
            id="date"
            type="date"
            name="date"
            defaultValue={data?.day}
            required
          />
        </p>
        <p>
          <label htmlFor="number">Daily Sales</label>
          <input
            id="number"
            type="number"
            name="number"
            defaultValue={data?.total}
            required
          />
        </p>
        <div className={classes.actions}>
          <button type="submit">Save</button>
        </div>
      </Form>
    </>
  );
}

export default SaleShopForm;
