import { useMutation } from "@tanstack/react-query";

import { createNewUser } from "../util/http";
import classes from "./NewUserForm.module.css";

function NewUserForm() {
  const { mutate } = useMutation({
    mutationFn: createNewUser,
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
        <h1>Create a new user</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
}

export default NewUserForm;
