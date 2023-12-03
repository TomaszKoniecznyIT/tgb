import { redirect } from "react-router-dom";

import NewShopForm from "../components/NewShopForm";
import { createNewShop } from "../util/http";

function NewShopPage() {
  return <NewShopForm />;
}

export default NewShopPage;

export async function action({ request }) {
  const formData = await request.formData();
  const shopData = Object.fromEntries(formData);
  await createNewShop(shopData);
  return redirect("/manager");
}
