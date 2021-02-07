import * as React from 'react';
import SearchBar from '../UI/SearchBar';
import RadioButtons from '../UI/RadioButtons';

import './style.scss';

interface HeaderProp {
  city: string;
  province: string;
  sortValue: string;
  handleChangeSearchCity: (input: string) => void;
  handleChangeSearchProvince: (input: string) => void;
  handleSelectSortCriteria: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const Header: React.FC<HeaderProp> = ({
  city,
  province,
  sortValue,
  handleChangeSearchCity,
  handleChangeSearchProvince,
  handleSelectSortCriteria,
}): JSX.Element => {
  return (
    <div className='row wrapper'>
      <SearchBar
        title='Search by city'
        handleChange={handleChangeSearchCity}
        value={city}
      />
      <SearchBar
        value={province}
        title='Search by province'
        handleChange={handleChangeSearchProvince}
      />
      <RadioButtons
        handleChange={handleSelectSortCriteria}
        sortValue={sortValue}
      />
    </div>
  );
};

export default Header;
