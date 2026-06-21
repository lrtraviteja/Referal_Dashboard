export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function signin(email, password) {
  const response = await fetch(`${API_BASE_URL}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (!response.ok || (responseJson.message && !responseJson.data)) {
    throw new Error(responseJson.message || 'Login failed');
  }

  return responseJson;
}
