import { redirect } from "react-router-dom";

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
  console.log(resData);
  localStorage.setItem("token", token);

  return resData.message;
}
