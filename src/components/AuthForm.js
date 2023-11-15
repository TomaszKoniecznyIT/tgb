import { Form } from "react-router-dom";

function AuthForm() {
  return (
    <>
      <Form>
        <h1>Log in</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div>
          <button>Login</button>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
