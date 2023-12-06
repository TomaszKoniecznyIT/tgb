function ShopItem({ shop }) {
  return (
    <div>
      <h1>SHOP DETAILS</h1>
      <h2>{shop.name}</h2>
      <p>{shop.email}</p>
      <p>{shop.shop_code}</p>
    </div>
  );
}

export default ShopItem;
