export async function createNewUser(userData) {
  const response = await fetch("http://127.0.0.1:5000/users/signup", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  });

  const { message } = await response.json();
  console.log(message);
  return message;
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

  const { message } = await response.json();
  console.log(message);
  return message;
}
