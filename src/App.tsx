import React, { useCallback, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BlogData } from './types/types';
import BlogList from './components/BlogList';
import Header from './components/Header';
import UseScrollToTop from './hooks/useScrollToTop';

const App: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([{} as BlogData]);
  const [tag, setTag] = useState('all');
  const [filter, setFilter] = useState(blogs);
  
    const getBlogData = async () => {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      setBlogs(data.posts)
    };
  
    useEffect(() => {
      getBlogData();
    }, []);

  const filterByTag = useCallback((tag: string) => {
    if (tag === 'all') {
      setFilter(blogs)
    } else {
      setFilter(blogs.filter((blog) => blog.tags.includes(tag)));
    }
  }, [blogs]);

  useEffect(() => {
    filterByTag(tag)
  }, [tag, filterByTag])


  return (
    <main className='app'>
      <Header />
      <div className='filter'>
        <h4>Filter blog posts by tag: </h4>
        <button type='submit' className='btn btn-dark' onClick={() => setTag('all')}> All</button>
        <button type='submit' className='btn btn-dark' onClick={() => setTag('english')}>English</button>
        <button type='submit' className='btn btn-dark' onClick={() => setTag('history')}>History</button>
        <button type='submit' className='btn btn-dark' onClick={() => setTag('french')}>French</button>
        <button type='submit' className='btn btn-dark' onClick={() => setTag('classic')}>Classic</button>
        <button type='submit' className='btn btn-dark' onClick={() => setTag('fiction')}>Fiction</button>
      </div>
      <BlogList blogs={filter} tag={tag} />
      <UseScrollToTop />
    </main>
  )
};

export default App;
