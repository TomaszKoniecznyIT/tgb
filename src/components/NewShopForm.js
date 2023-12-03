import { Form } from "react-router-dom";

import classes from "./NewShopForm.module.css";

function NewShopForm() {
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>Create a new shop</h1>
        <p>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" required />
        </p>
        <p>
          <label htmlFor="shop_code">Shop code</label>
          <input id="shop_code" type="text" name="shop_code" required />
        </p>
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

export default NewShopForm;
