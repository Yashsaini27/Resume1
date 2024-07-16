import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import './Blog.css';
import Header from "../Header"

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/posts.json');
      const data = await response.json();
      setPosts(data);
    };
    
    fetchData();
  }, []);

  return (
    <>
    <Header/>
    <div className="blog">
      <h3>Resume Builder Blog</h3>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Blog;
