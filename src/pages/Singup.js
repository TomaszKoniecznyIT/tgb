import { redirect } from "react-router-dom";

import NewUserForm from "../components/NewUserForm";
import { createNewUser } from "../util/http";

function SingupPage() {
  return <NewUserForm />;
}

export default SingupPage;

export async function action({ request }) {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);
  await createNewUser(userData);
  return redirect("/manager");
}
