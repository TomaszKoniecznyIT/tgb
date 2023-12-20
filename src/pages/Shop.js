import { Link } from "react-router-dom";
import { getShopByEmail } from "../util/http";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function ShopPage() {
  const email = localStorage.getItem("user_email");

  const { data } = useQuery({
    queryKey: ["shopId", email],
    queryFn: () => getShopByEmail(email),
  });

  return (
    <>
      <div>
        <h1>Shop Page</h1>
      </div>
      <div>
        <Link to={`/manager/shops/${data ? data.id : ""}`}>
          <h3>Shop Detail</h3>
        </Link>
      </div>
    </>
  );
}

export default ShopPage;
