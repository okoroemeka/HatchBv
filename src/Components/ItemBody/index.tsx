import * as React from 'react';
import { Typography } from '@material-ui/core';

import Card, { CardProps } from '../UI/Card';

import './style.scss';

export interface ItemsBodyProps {
  items: CardProps[];
}

const ItemsBody: React.FC<ItemsBodyProps> = ({ items }) => {
  return (
    <div className='row item__wrapper'>
      {items.length ? (
        items.map(
          ({ city, lat, lng, admin_name, population }: CardProps, index) => (
            <Card
              key={index}
              city={city}
              lat={lat}
              lng={lng}
              admin_name={admin_name}
              population={population}
            />
          )
        )
      ) : (
        <Typography variant='h4' className='no__city'>
          No city found
        </Typography>
      )}
    </div>
  );
};

export default ItemsBody;
