const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts(page = 1, limit = 10) {
  const response = await fetch(`${BASE_URL}/posts?_page=${page}&_limit=${limit}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

export async function fetchTodos() {
  const response = await fetch(`${BASE_URL}/todos`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}
