import { Link } from "react-router-dom";

function TargetDetails({ targets }) {
  return (
    <div>
      <h1>Target details</h1>
      {targets.length === 0 && <p>There are no targets for this month yet</p>}
      {/* informacje o targetach */}
      <Link to="edit">Edit Target</Link>
    </div>
  );
}

export default TargetDetails;
