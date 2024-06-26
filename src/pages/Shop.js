import { getShopByEmail } from "../util/http";
import { useQuery } from "@tanstack/react-query";
import CustomLink from "../components/CustomLink";

function ShopPage() {
  const email = localStorage.getItem("user_email");
  const is_manager =
    localStorage.getItem("is_manager") === "true" ? true : false;

  const { data } = useQuery({
    queryKey: ["shopId", email],
    queryFn: () => getShopByEmail(email),
  });

  let content;

  if (!is_manager) {
    content = (
      <>
        <div>
          <h1>Shop Page</h1>
        </div>
        <div>
          <CustomLink to={`/manager/shops/${data ? data.id : ""}`}>
            <h3>Shop Detail</h3>
          </CustomLink>
        </div>
      </>
    );
  } else {
    content = <div>The manager does not have access to this page.</div>;
  }

  return content;
}

export default ShopPage;
