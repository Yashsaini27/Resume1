import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <>
   
    <div className="blog-post">
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <p>{post.date}</p>
      <button>Read More</button>
    </div>
    </>
  );
};

export default BlogPost;
