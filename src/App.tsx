import React, { useState, useEffect } from 'react';

import Header from './Components/Header';
import { CardProps } from './Components/UI/Card';
import ItemBody from './Components/ItemBody';
import { search, sort, successHelper, errorHelper } from './Utils/helper';
import dataSource from './data/data.json';

import './Styles/App.css';

function App() {
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [data, setData] = useState([]);
  const [sortValue, setSortValue] = React.useState('');
  const [err, setErr] = useState('');

  const handleSelectSortCriteria = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSortValue((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    let searchResult: Array<CardProps> = [...dataSource];

    if (city) {
      searchResult = search(searchResult, city, 'city');
    }
    if (province) {
      searchResult = search(searchResult, province, 'admin_name');
    }
    if (sortValue && sortValue !== 'location') {
      searchResult = sort(searchResult, sortValue);
    }
    if (sortValue === 'location') {
      navigator.geolocation.getCurrentPosition(
        successHelper(searchResult, setData),
        errorHelper(setErr)
      );
    }
    setData(searchResult);
  }, [city, province, sortValue]);

  return (
    <div className='container'>
      <Header
        handleChangeSearchCity={setCity}
        handleChangeSearchProvince={setProvince}
        city={city}
        sortValue={sortValue}
        province={province}
        handleSelectSortCriteria={handleSelectSortCriteria}
      />
      <ItemBody items={data} />
    </div>
  );
}

export default App;
