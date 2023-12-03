import { redirect } from "react-router-dom";

export function action() {
  localStorage.removeItem("token");
  localStorage.removeItem("is_manager");
  localStorage.removeItem("expiration");
  return redirect("/");
}
