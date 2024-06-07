import image from "../static/images/shop_home.png";

function HomePage() {
  return (
    <>
      <h1>Sales Tracker</h1>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          padding: "20px",
        }}
      ></div>
    </>
  );
}

export default HomePage;
