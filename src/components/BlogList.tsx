import React from 'react';
// import { posts } from '../data';
import { BlogData } from '../types/types';

interface IBlogListProps {
  blogs: BlogData[],
}


const BlogList = ({ blogs }: IBlogListProps) => {
  return (
    <>
      {blogs?.map((blog) => {
        return (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <p><i className="fa-solid fa-thumbs-up"></i> {blog.reactions}</p>
            <p><i className="fa-solid fa-tag"></i>  {blog.tags?.join(', ')}</p>
          </div>
        )
      })} 
    </>   
  )    
}

export default BlogList

/* 
interface IBlogListComponentProps {
  blog: BlogData
};

{ blog: { id, title, body, reactions, tags }}: IBlogListComponentProps
*/