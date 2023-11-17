import { Form, Link, useSearchParams } from "react-router-dom";

import classes from "./AuthForm.module.css";
import { useMutation } from "@tanstack/react-query";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  const createNewUser = (usetData) => {
    console.log(usetData);
  };

  const { mutate } = useMutation({
    mutationFn: createNewUser,
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    mutate(data);
  }

  return (
    <>
      <Form method="post" className={classes.form} onSubmit={handleSubmit}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create a new user" : "Login"}
          </Link>
          <button type="submit">Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
