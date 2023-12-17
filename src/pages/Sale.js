import { redirect } from "react-router-dom";
import SaleShopForm from "../components/SaleShopForm";
import { addDailySale } from "../util/http";

function SalePage() {
  return <SaleShopForm />;
}

export default SalePage;

export async function action({ request, params }) {
  const formData = await request.formData();
  const saleShopData = Object.fromEntries(formData);
  saleShopData.id = params.shopId;
  await addDailySale(saleShopData);
  return redirect(`/manager/shops/${params.shopId}`);
}
