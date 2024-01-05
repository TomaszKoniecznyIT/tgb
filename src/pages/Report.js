import { useLoaderData } from "react-router-dom";

import ReportShopDateForm from "../components/ReportShopDateForm";
import { getDataForReport } from "../util/http";

function ReportPage() {
  const data = useLoaderData();

  if (data) {
    <h1>Report</h1>;
  } else {
    return <ReportShopDateForm />;
  }
}

export default ReportPage;

export async function loader({ request, params }) {
  const formData = await request.formData();
  const datesForReport = Object.fromEntries(formData);
  datesForReport.id = params.shopId;
  const response = await getDataForReport(datesForReport);
  return response;
}
