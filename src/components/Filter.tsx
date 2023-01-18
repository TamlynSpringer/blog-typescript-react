import React from 'react';
import { BlogData } from '../types/types';

type BlogTag = 'All' | 'History' | 'English' | 'French' | 'Classic' | 'Fiction';

interface IFilterProps {
  filter: BlogTag,
  blogs: BlogData,
  onFilterChange(event: React.ChangeEvent<HTMLSelectElement>): void
};

const Filter = ({filter}: IFilterProps) => {
  return (
    <div>
      <select id='tag' value={filter} >
        <option value='All'>All</option>
        <option value='History'>History</option>
        <option value='English'>English</option>
        <option value='French'>French</option>
        <option value='Classic'>Classic</option>
        <option value='Fiction'>Fiction</option>
      </select>
    </div>
  )
};

export default Filter;