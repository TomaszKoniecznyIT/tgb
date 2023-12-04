import { Form } from "react-router-dom";

import classes from "./TargetForm.module.css";

function TargetForm() {
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>Target</h1>
        <p>
          <label htmlFor="month">Month</label>
          <input id="month" type="month" name="month" required />
        </p>

        <div className={classes.actions}>
          <button type="submit">Save</button>
        </div>
      </Form>
    </>
  );
}

export default TargetForm;
