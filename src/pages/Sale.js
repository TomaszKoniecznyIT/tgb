import { useParams } from "react-router-dom";
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
  console.log(saleShopData);
  await addDailySale(saleShopData);
}
