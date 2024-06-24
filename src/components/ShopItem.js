import CustomLink from "../components/CustomLink";

function ShopItem({ shop }) {
  const isManager =
    localStorage.getItem("is_manager") === "true" ? true : false;
  const userEmail = localStorage.getItem("user_email");

  return (
    <div>
      <h1>SHOP DETAILS</h1>
      <div>
        <h2>{shop.name}</h2>
        <p>{shop.email}</p>
        <p>{shop.shop_code}</p>
      </div>
      <div>
        {isManager && <CustomLink to="target">Add Target</CustomLink>}
        {!isManager && userEmail === shop.email && (
          <CustomLink to="sale">Add Sale</CustomLink>
        )}
      </div>
      <div>
        <CustomLink to="report">Report</CustomLink>
      </div>
      <div>
        <CustomLink to="monthly-report">Monthly Report</CustomLink>
      </div>
    </div>
  );
}

export default ShopItem;
