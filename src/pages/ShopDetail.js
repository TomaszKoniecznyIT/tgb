import { useLoaderData } from "react-router-dom";
import { getShop } from "../util/http";
import ShopItem from "../components/ShopItem";

function ShopDetailPage() {
  const data = useLoaderData();

  return (
    <>
      <ShopItem shop={data.shop} />
    </>
  );
}

export default ShopDetailPage;

export async function loader({ request, params }) {
  const id = params.shopId;

  const response = getShop(id);
  return response;
}
