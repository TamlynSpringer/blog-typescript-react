import React, { useEffect } from 'react';
// import { images } from '../data';
import { BlogData } from '../types/types';

interface IBlogListProps {
  blogs: BlogData[],
  tag: string,
}


const BlogList = ({ blogs, tag }: IBlogListProps) => {
  const capitalizeFirstLetter = () => {
    return tag.charAt(0).toUpperCase() + tag.slice(1);
  }
  const increment = (prev: number) => prev + 1;
  useEffect(() => {
    increment(1)
  })

  return (
    <section className='blog-posts'>
      <h2>{capitalizeFirstLetter()}</h2>
      {blogs?.map((blog) => {
        return (
            <div key={blog.id} className='card bg-light mb-3'>
              <h3 className='card-title'>{blog.title}</h3>
              <article className='card-body'>

              </article>
              <p className='card-text'>{blog.body}</p>
              <p className='btn-p btn btn-outline-secondary'><i className="fa-solid fa-thumbs-up"></i> {blog.reactions}</p>
              <p className='btn-p btn btn-outline-secondary'><i className="fa-solid fa-tag"></i>  {blog.tags?.join(', ')}</p>
            </div>
            
        )
      })} 
    </section>
  )    
}

export default BlogList

/* 
interface IBlogListComponentProps {
  blog: BlogData
};

{ blog: { id, title, body, reactions, tags }}: IBlogListComponentProps
*/