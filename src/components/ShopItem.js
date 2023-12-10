function ShopItem({ shop }) {
  const is_manager =
    localStorage.getItem("is_manager") === "true" ? true : false;

  return (
    <div>
      <h1>SHOP DETAILS</h1>
      <div>
        <h2>{shop.name}</h2>
        <p>{shop.email}</p>
        <p>{shop.shop_code}</p>
      </div>
      <div>
        {is_manager && <button>Add Target</button>}
        {!is_manager && <button>Add Sale</button>}
      </div>
      <button>Report</button>
    </div>
  );
}

export default ShopItem;
