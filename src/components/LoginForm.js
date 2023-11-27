import { useMutation } from "@tanstack/react-query";

import { login } from "../util/http";
import classes from "./NewUserForm.module.css";

function LoginForm() {
  const { mutate } = useMutation({
    mutationFn: login,
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData);
    mutate(userData);
  }

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
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
      </form>
    </>
  );
}

export default LoginForm;
