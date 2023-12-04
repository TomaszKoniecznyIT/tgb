import { json, useLoaderData } from "react-router-dom";
import TargetForm from "../components/TargetForm";
import { getShop, getShopTarget } from "../util/http";
import TargetDetails from "../components/TargetDetails";

function TargetPage() {
  const data = useLoaderData();
  return <TargetDetails targets={data.targets} />;
}

export default TargetPage;

export async function loader() {
  const response = getShopTarget();
  return response;
}
