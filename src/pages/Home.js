import { Link } from "react-router-dom";
import image from "../static/images/shop_home.png";

function HomePage() {
  return (
    <>
      <h1>Sales Tracker</h1>
      <img src={image} alt="image" />
      <div>
        <h2>Simplify Your Sales Analysis</h2>
        <p>
          Welcome to SalesTracker, your go-to solution for streamlined sales
          analysis. My application focuses on simplicity and effectiveness.
        </p>
        <h3>Key Features:</h3>
        <p>
          Target Tracking: Set and monitor sales targets for individual stores
          effortlessly. Stay on top of your goals and track progress with ease.
        </p>

        <p>
          Store-by-Store Sales: Get a clear picture of each store's sales
          performance. Identify patterns, spot outliers, and make informed
          decisions.
        </p>

        <p>
          Basic Sales Reports: Generate straightforward sales reports at the
          click of a button. Our user-friendly interface ensures that you can
          access the information you need without any hassle.
        </p>
      </div>
      <div>
        <h2>Start Optimizing Your Sales Today!</h2>
        <p>
          Ready to revolutionize your sales approach? Dive in by using
          SalesTracker. Experience firsthand how our application can make a
          difference for your business. Join other successful retailers who rely
          on us to streamline their sales strategy.
        </p>
        <Link to={"/auth/singup"}>
          <h2>Unlock the Power of SalesTracker Now!</h2>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
