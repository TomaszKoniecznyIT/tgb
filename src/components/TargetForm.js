import { Form } from "react-router-dom";

import classes from "./TargetForm.module.css";

function TargetForm({ shops }) {
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>Target</h1>
        <p>
          <label htmlFor="month">Month</label>
          <input id="month" type="month" name="month" required />
        </p>
        {shops.map((shop) => (
          <div key={shop.id}>
            <label htmlFor={`shop_${shop.id}`}>{shop.name}</label>
            <input
              type="number"
              id={`shop_${shop.id}`}
              name={`shop_${shop.id}`}
            />
          </div>
        ))}
        <div className={classes.actions}>
          <button type="submit">Save</button>
        </div>
      </Form>
    </>
  );
}

export default TargetForm;
