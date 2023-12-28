import { Link } from "react-router-dom";

function ManagerPage() {
  const is_manager =
    localStorage.getItem("is_manager") === "true" ? true : false;

  let content;

  if (is_manager) {
    content = (
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
  } else {
    content = <div>The shop does not have access to this page.</div>;
  }
  return content;
}

export default ManagerPage;
