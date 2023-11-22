export async function createNewUser(usetData) {
  const url = "http://127.0.0.1:5000/users/signup";
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(usetData),
    headers: { "Content-Type": "application/json" },
  });
}
