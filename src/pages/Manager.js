import { Link } from "react-router-dom";

function ManagerPage() {
  return (
    <>
      <div>
        <h1>Menager Page</h1>
      </div>
      <div>
        <p>
          <Link to="new_shop">Add a new shop</Link>
        </p>
        <p>
          <Link to="target">Add a monthly target for shop</Link>
        </p>
        <h3>Report</h3>
      </div>
    </>
  );
}

export default ManagerPage;
