import { useLoaderData } from "react-router-dom";
import { getShops } from "../util/http";
import ShopsList from "../components/ShopsList";

function ManagerShopsPage() {
  const data = useLoaderData();
  return <ShopsList shops={data.shops} />;
}

export default ManagerShopsPage;

export async function loader() {
  const response = getShops();
  return response;
}
