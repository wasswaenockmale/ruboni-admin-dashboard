import React from 'react';

import { TotalCardProps } from "@/types/cards";

function TotalCard({
  name,
  icon,
  count,
}: TotalCardProps) {
  return (
    <div className='w-full h-20 p-1 mt-2 bg-white rounded-lg total-card-container' role='region' aria-label={`Total ${name}`}>
      <div className='flex flex-col justify-between m-auto total-card-content'>
        <div className='flex items-center justify-between p-2 text-primary-500 total-count'>
          <h1 className='text-h6 total-count-text'>
            {count / 1000}k
          </h1>
          {React.createElement(icon, {
            role: 'img',
            'aria-hidden': 'true',
            className: 'total-icon',
            height: "h-8",
            width: "w-8",
          })}
        </div>
        <p className='text-sm text-primary-500 total-label'>
          Total {name}
        </p>
      </div>
    </div>
  );
}

export default TotalCard;