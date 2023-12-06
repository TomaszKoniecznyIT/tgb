import { useParams } from "react-router-dom";

function ShopDetailPage() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Event detail page</h1>
      <p>shop ID: {params.shopId} </p>
    </>
  );
}

export default ShopDetailPage;
