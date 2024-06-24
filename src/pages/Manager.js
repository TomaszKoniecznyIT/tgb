import CustomLink from "../components/CustomLink";

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
            <CustomLink to="new_shop">Add a new shop</CustomLink>
          </p>
          <p>
            <CustomLink to="shops">Show all shops.</CustomLink>
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
