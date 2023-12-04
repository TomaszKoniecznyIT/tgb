import { useLoaderData } from "react-router-dom";
import TargetForm from "../components/TargetForm";
import { getShop } from "../util/http";

function TargetEditPage() {
  const data = useLoaderData();
  return <TargetForm shops={data.shops} />;
}

export default TargetEditPage;

export async function loader() {
  const response = getShop();
  return response;
}
