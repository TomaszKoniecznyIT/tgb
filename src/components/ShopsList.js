import classes from "./ShopsList.module.css";

function ShopsList({ shops }) {
  console.log(shops);
  return (
    <div className={classes.shops}>
      <h1>All Shops</h1>
      <ul className={classes.list}>
        {shops.map((shop) => (
          <li key={shop.id} className={classes.item}>
            <div className={classes.content}>
              <h2>{shop.name}</h2>
              <h3>{shop.shop_code}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopsList;
