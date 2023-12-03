import { jwtDecode } from "jwt-decode";
import { getAuthToken } from "./auth";

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

  if (!response.ok) {
    const error = new Error("An error occurred while logging in");
    error.code = response.status;
    error.message = await response.json();
    throw error;
  }

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
