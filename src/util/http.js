import { jwtDecode } from "jwt-decode";
import { getAuthToken } from "./auth";
import { json } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function createNewUser(userData) {
  const response = await fetch("http://127.0.0.1:5000/users/signup", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  });

  const resData = await response.json();
  console.log(resData.message);

  return resData.message;
}

export async function login(userData) {
  const response = await fetch("http://127.0.0.1:5000/users/login", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  });

  const resData = await response.json();

  const token = resData.token;
  localStorage.setItem("token", token);

  const is_manager = jwtDecode(token).is_manager;
  localStorage.setItem("is_manager", is_manager);

  const expiration = jwtDecode(token).expiration;
  localStorage.setItem("expiration", expiration);

  return resData.message;
}

export async function createNewShop(shopData) {
  const token = getAuthToken();
  console.log(token);

  const response = await fetch("http://127.0.0.1:5000/new_shop", {
    method: "POST",
    body: JSON.stringify(shopData),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const resData = await response.json();
  console.log(resData.message);

  return resData.message;
}

export async function getShops() {
  const response = await fetch("http://127.0.0.1:5000/shops_list");

  if (!response.ok) {
    throw json({ message: "Could not fetch shops" }, { status: 500 });
  } else {
    return response;
  }
}

export async function getShop(id) {
  const response = await fetch("http://127.0.0.1:5000/shops/" + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch shops" }, { status: 500 });
  } else {
    return response;
  }
}

export async function getShopTarget() {
  const response = await fetch("http://127.0.0.1:5000/shops_targets");

  if (!response.ok) {
    throw json({ message: "Could not fetch shops targets" }, { status: 500 });
  } else {
    return response;
  }
}

export async function getSaleForDay({ id, day, signal }) {
  console.log("ssss", day);
  const response = await fetch(
    `http://127.0.0.1:5000/shops/${id}/sale/${day}`,
    {
      signal,
    }
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch shops sale" }, { status: 500 });
  }

  const { sale } = await response.json();
  return sale;
}
