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

  const user = jwtDecode(token).user;
  localStorage.setItem("user_email", user);

  const expiration = jwtDecode(token).expiration;
  localStorage.setItem("expiration", expiration);

  return resData.message;
}

export async function createNewShop(shopData) {
  const token = getAuthToken();

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

export async function getShopByEmail(email) {
  const response = await fetch(`http://127.0.0.1:5000/shops/email/` + email);

  if (!response.ok) {
    throw json({ message: "Could not fetch shops" }, { status: 500 });
  }
  const { shop } = await response.json();
  return shop;
}

export async function getSaleForDay({ id, day, signal }) {
  const response = await fetch(
    `http://127.0.0.1:5000/shops/${id}/sale?day=${day}`,
    { signal }
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch shops sale" }, { status: 500 });
  }

  const { sale } = await response.json();
  return sale;
}

export async function addDailySale(saleShopData) {
  const token = getAuthToken();

  const response = await fetch("http://127.0.0.1:5000/shops/sale", {
    method: "PUT",
    body: JSON.stringify(saleShopData),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const resData = await response.json();
  console.log(resData.message);

  return resData.message;
}

export async function getTargetForMonth({ id, month, signal }) {
  const response = await fetch(
    `http://127.0.0.1:5000/shops/${id}/target?month=${month}`,
    { signal }
  );
  if (!response.ok) {
    throw json({ message: "Could not fetch shops target" }, { status: 500 });
  }
  const { target } = await response.json();
  return target;
}

export async function addMonthlyTarget(saleShopData) {
  const token = getAuthToken();

  const response = await fetch("http://127.0.0.1:5000/shops/target", {
    method: "PUT",
    body: JSON.stringify(saleShopData),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const resData = await response.json();
  console.log(resData.message);

  return resData.message;
}

export async function getDataForReport() {}
