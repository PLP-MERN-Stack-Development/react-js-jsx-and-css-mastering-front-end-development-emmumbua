import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../api/jsonPlaceholder';
import Card from '../components/Card';
import Button from '../components/Button';

export default function ApiPage() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const limit = 10;

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchPosts(page, limit)
      .then(data => {
        setPosts(data);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  const filtered = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts from API</h1>

      <div className="mb-4 flex space-x-2">
        <input
          className="flex-1 px-3 py-2 border rounded"
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {!loading && !error && filtered.map(post => (
          <Card key={post.id}>
            <h2 className="font-semibold mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>

      <div className="mt-4 flex justify-between">
        <Button variant="secondary" disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
        <Button variant="secondary" onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </div>
  );
}
