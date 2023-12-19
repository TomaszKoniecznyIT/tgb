import { redirect } from "react-router-dom";
import { addMonthlyTarget } from "../util/http";
import TargetShopForm from "../components/TargetShopForm";

function TargetPage() {
  return <TargetShopForm />;
}

export default TargetPage;

export async function action({ request, params }) {
  const formData = await request.formData();
  const targetShopData = Object.fromEntries(formData);
  targetShopData.id = params.shopId;
  await addMonthlyTarget(targetShopData);
  return redirect(`/manager/shops/${params.shopId}`);
}
