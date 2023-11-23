export async function createNewUser(userData) {
  const response = await fetch("http://127.0.0.1:5000/users/signup", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  });

  const res = await response.json();
  return console.log(res);
}
