import { redirect } from "react-router-dom";

import NewShopForm from "../components/NewShopForm";
import { createNewShop } from "../util/http";

function NewShopPage() {
  const is_manager =
    localStorage.getItem("is_manager") === "true" ? true : false;

  if (is_manager) {
    return <NewShopForm />;
  } else {
    return <div>This option is only available to managers.</div>;
  }
}

export default NewShopPage;

export async function action({ request }) {
  const formData = await request.formData();
  const shopData = Object.fromEntries(formData);
  await createNewShop(shopData);
  return redirect("/manager");
}
