import { Form } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  return (
    <>
      <Form className={classes.form}>
        <h1>Log in</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <button>Login</button>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
