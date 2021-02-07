import * as React from 'react';
import { Typography, OutlinedInput } from '@material-ui/core';

import './style.scss';

interface SearchBarProps {
  title: string;
  className?: string;
  value: string;
  handleChange: (input: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  title,
  className,
  value,
  handleChange,
}) => {
  return (
    <div className={`col-sm-12 col-l-6 search__wrapper ${className}`}>
      <Typography variant='h6' color='secondary'>
        {title}
      </Typography>
      <OutlinedInput
        value={value}
        placeholder={title}
        className='search__area'
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
