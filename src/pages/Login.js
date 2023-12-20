import { redirect } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import { login } from "../util/http";

function LoginPage() {
  return <LoginForm />;
}

export default LoginPage;

export async function action({ request }) {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);
  await login(userData);
  return redirect(
    `${localStorage.getItem("is_manager") === "true" ? "/manager" : "/shop"}`
  );
}
