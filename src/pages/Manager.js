import { Link } from "react-router-dom";

function ManagerPage() {
  return (
    <>
      <div>
        <h1>Menager Page</h1>
      </div>
      <div>
        <Link to="new_shop">Add a new shop</Link>
        <h3>Add a monthly target for shop</h3>
        <h3>Report</h3>
      </div>
    </>
  );
}

export default ManagerPage;
