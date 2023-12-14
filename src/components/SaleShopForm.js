import { Form } from "react-router-dom";

import classes from "./SaleShopForm.module.css";

function SaleShopForm() {
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>Daily Sales</h1>
        <p>
          <label htmlFor="date">Day</label>
          <input id="date" type="date" name="date" required />
        </p>
        <p>
          <label htmlFor="number">Daily Sales</label>
          <input id="number" type="number" name="number" required />
        </p>
        <div className={classes.actions}>
          <button type="submit">Save</button>
        </div>
      </Form>
    </>
  );
}

export default SaleShopForm;
