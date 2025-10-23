import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";

export default function ApiData() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 6; // number of posts per page

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
        );
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  // Search handler
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, posts]);

  return (
    <div className="mt-8">
      {/* <h2 className="text-2xl font-bold mb-4">API Data</h2> */}

      {/* Search input */}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-4"
      />

      {/* Loading & error states */}
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Posts grid */}
      {!loading && !error && filteredPosts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map((post) => (
            <Card key={post.id} title={post.title}>
              <p>{post.body}</p>
            </Card>
          ))}
        </div>
      )}

      {/* No results */}
      {!loading && !error && filteredPosts.length === 0 && (
        <p className="text-gray-500">No results found.</p>
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-6">
        <Button
          variant="secondary"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          ← Previous
        </Button>
        <span className="font-semibold">Page {page}</span>
        <Button variant="primary" onClick={() => setPage((p) => p + 1)}>
          Next →
        </Button>
      </div>
    </div>
  );
}
