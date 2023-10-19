import React from 'react'
import Image from 'next/image'
import avatar from '../../../../../../public/images/Avator.png'
import { AiFillStar } from "react-icons/ai"

function ReviewItem() {
  return (
    <div className=' w-full border-b p-2 flex gap-2 justify-between'>
      {/* image  */}
      <div className='flex gap-2'>
        <div className=' w-8 h-8 flex justify-center'>
          <Image
            src={avatar}
            alt='customer-image'
            className='rounded-full'
          />
        </div>

        {/* information  */}
        <div className=' cursor-pointer'>
          <h4 className=' text-sm'>Emil</h4>
          <div className='flex gap-0.5'>
            {
              Array(5).fill(5).map((_item: any, index: number) => (
                <AiFillStar key={index} size={10} className=" fill-primary-500" />
              ))
            }
          </div>
          <p className=' text-xxs'>They have a good sense of urgency. </p>
        </div>
      </div>
      {/* time and review button  */}
      <div className='flex flex-col gap-2'>
        <h5 className=' text-xxs opacity-50'>3min ago</h5>
        <button className=' text-xxs text-primary-500 underline cursor-pointer p-1 rounded-sm'>
          REVIEW
        </button>
      </div>
    </div>
  );
}

export default ReviewItem