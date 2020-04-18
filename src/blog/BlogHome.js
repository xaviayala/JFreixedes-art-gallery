import React from 'react';
import { useState, useEffect } from 'preact/hooks';
import butter from './butter-client';
import PostSummary from './PostSummary';


const BlogHome = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await butter.post.list({
        page: 1, 
        page_size: 10
      });
      setData(response.data);
    } catch(e) {
      setError(`There was an error: ${e.message}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const getPosts = () => (
    <div>
      {data.data.map((post, i) => (
        <PostSummary {...post} key={i} />
      ))}
    </div>
  );

  const getContent = () => {
    if ( loading ) return <p>Fetching posts...</p>;
    if ( error ) return <p>{error}</p>;
    if ( !data ) return null;
    return getPosts();
  }

  return (
    <>
      {getContent()}
    </>
  );
}

export default BlogHome;