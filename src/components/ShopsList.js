import { Link } from "react-router-dom";
import classes from "./ShopsList.module.css";
import image1 from "../static/images/shop1.png";
import image2 from "../static/images/shop2.png";
import image3 from "../static/images/shop3.png";
import image4 from "../static/images/shop4.png";
import image5 from "../static/images/shop5.png";
import image6 from "../static/images/shop6.png";
import image7 from "../static/images/shop7.png";
import image8 from "../static/images/shop8.png";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

function ShopsList({ shops }) {
  console.log(shops);

  return (
    <div className={classes.shops}>
      <h1>All Shops</h1>
      <ul className={classes.list}>
        {shops.map((shop) => (
          <li key={shop.id} className={classes.item}>
            <Link to={`/manager/shops/${shop.id}`}>
              <div className={classes.content}>
                <img src={images[Math.floor(Math.random() * 8)]} />
                <h2>{shop.name}</h2>
                <h3>{shop.shop_code}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopsList;
