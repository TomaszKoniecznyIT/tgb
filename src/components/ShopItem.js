import { Link } from "react-router-dom";

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
        {isManager && <Link to="target">Add Target</Link>}
        {!isManager && userEmail === shop.email && (
          <Link to="sale">Add Sale</Link>
        )}
      </div>
      <button>Report</button>
    </div>
  );
}

export default ShopItem;
