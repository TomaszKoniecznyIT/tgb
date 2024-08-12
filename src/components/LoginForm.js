import { Form } from "react-router-dom";

import classes from "./LoginForm.module.css";

function LoginForm() {
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>Login</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <button type="submit">Login</button>
        </div>
      </Form>
    </>
  );
}

export default LoginForm;
