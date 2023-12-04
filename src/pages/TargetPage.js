import { json, useLoaderData } from "react-router-dom";
import TargetForm from "../components/TargetForm";
import { getShop } from "../util/http";

function TargetPage() {
  const data = useLoaderData();
  console.log(data);
  return <TargetForm shops={data.shops} />;
}

export default TargetPage;

export async function loader() {
  const response = getShop();
  return response;
}
