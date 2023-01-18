import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/dots.css';
import { BlogData } from './types/types';
import BlogList from './components/BlogList';
import Header from './components/Header';
// import Filter from './components/Filter';
// import Search from './components/Search';
// import { Route, Routes } from 'react-router-dom';
// import { BlogData } from './types/types';

const App: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([{} as BlogData]);
  const [tag, setTag] = useState('all');
  const [filter, setFilter] = useState(blogs);
  
    const getBlogData = async () => {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      setBlogs(data.posts)
    }
  
    useEffect(() => {
      getBlogData();
    }, []);

  console.log(blogs, 'blog data from use state, outside fetch');

  const filterByTag = (tag: string) => {
    if (tag === 'all') {
      setFilter(blogs)
    } else {
      setFilter(blogs.filter((blog) => blog.tags.includes(tag)));
    }
  };

  useEffect(() => {
    filterByTag(tag)
  }, [blogs, tag])


  return (
    <>
      <Header />
      <div>
        <h3>Filter blog posts by tag: </h3>
        <button type='submit' onClick={() => setFilter(blogs)}> All</button>
        <button type='submit' onClick={() => setTag('history')}>History</button>
        <button type='submit' onClick={() => setTag('english')}>English</button>
        <button type='submit' onClick={() => setTag('french')}>French</button>
        <button type='submit' onClick={() => setTag('classic')}>Classic</button>
        <button type='submit' onClick={() => setTag('fiction')}>Fiction</button>
      </div>
      {/* <Tag tag={handleTagChange} blogs={blogs} /> */}
      <BlogList blogs={filter} />
    </>
  )
}

export default App;

/*
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/filter' element={<Filter blog={blog} blogFilter={handleFilterChange} />}></Route>
        <Route path="/search" element={<Search blog={blog} />}></Route>
        <Route path="/blogs" element={<BlogList blog={blog} />}></Route> 
      </Routes>

         filter: '',
    title: '',
    body: '',
    reactions: 0,
    tags: []
*/