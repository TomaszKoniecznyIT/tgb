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
          <Link to="shops">Show all shops.</Link>
        </p>
      </div>
    </>
  );
}

export default ManagerPage;
