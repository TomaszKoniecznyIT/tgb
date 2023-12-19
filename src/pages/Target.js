import { redirect } from "react-router-dom";
import { addMonthlyTarget } from "../util/http";
import TargetShopForm from "../components/TargetShopForm";

function TargetPage() {
  return <TargetShopForm />;
}

export default TargetPage;

export async function action({ request, params }) {
  const formData = await request.formData();
  const saleShopData = Object.fromEntries(formData);
  saleShopData.id = params.shopId;
  await addMonthlyTarget(saleShopData);
  return redirect(`/manager/shops/${params.shopId}`);
}
