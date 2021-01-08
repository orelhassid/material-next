import React, { useState, useEffect } from "react";

export default function index() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data } = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    } catch (error) {}
  };

  return (
    <div>
      <button onClick={() => fetchPosts()}>Refresh</button>
      {JSON.stringify(posts, null, 4)}
    </div>
  );
}
