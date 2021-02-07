import * as React from 'react';
import { Typography } from '@material-ui/core';

interface DetailProps {
  itemTitle?: string;
  itemName?: string;
}

const Detail: React.FC<DetailProps> = ({
  itemTitle,
  itemName,
}: DetailProps) => {
  return (
    <div className='detail'>
      <Typography variant='h6' className='item__name'>
        {`${itemTitle}:`}
      </Typography>
      <Typography variant='h6' className='item'>
        {itemName}
      </Typography>
    </div>
  );
};

export default Detail;
