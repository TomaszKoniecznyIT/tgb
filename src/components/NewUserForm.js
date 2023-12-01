import { Form } from "react-router-dom";

import classes from "./NewUserForm.module.css";

function NewUserForm() {
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>Create a new user</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <p>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            id="confirm_password"
            type="password"
            name="confirm_password"
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

export default NewUserForm;
