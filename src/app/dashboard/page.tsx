import React from 'react';
import { Booking, Orders, Users } from '@/components/Icons';
import {
  StatisticsCard,
  LatestBooking,
  LatestOrders,
  ReviewCard,
  TotalCard
} from '@/components/Cards/DasbhoardCards';

 
async function Page() {
  return (
    <div className='grid w-full grid-cols-1 gap-2 mt-1 lg:grid-cols-7 md:grid-cols-2'>
      <div className='flex row-start-1 gap-5 p-1 lg:flex-col md:col-start-1 md:col-end-2'>
        <TotalCard
          name='Orders'
          count={1800}
          icon={Orders}
        />
        <TotalCard
          name='Customer'
          count={10000}
          icon={Users}
        />
        <TotalCard
          name='Bookings'
          count={3400}
          icon={Booking}
        />
      </div>
      <StatisticsCard />
      <ReviewCard />
      <LatestBooking />
      <LatestOrders />
    </div>
  )
}

export default Page;