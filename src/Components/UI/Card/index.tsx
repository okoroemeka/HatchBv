import * as React from 'react';
import { Card as MuiCard } from '@material-ui/core';
import Detail from '../Detail';

import './style.scss';

export interface CardProps {
  city?: string;
  lng?: string;
  lat?: string;
  admin_name?: string;
  population?: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { city, lat, lng, admin_name, population } = props;
  return (
    <div className='col-sm-12 col-md-6 col-l-3 card__wrapper'>
      <MuiCard
        className='card'
        style={{ boxShadow: '0px 2px 40px -1px rgb(0, 0, 0, 0.1)' }}
      >
        <Detail itemTitle='city' itemName={city} />
        <Detail itemTitle='lat' itemName={lat} />
        <Detail itemTitle='lng' itemName={lng} />
        <Detail itemTitle='admin Name' itemName={admin_name} />
        <Detail itemTitle='population' itemName={population || 'N/A'} />
      </MuiCard>
    </div>
  );
};

export default Card;
