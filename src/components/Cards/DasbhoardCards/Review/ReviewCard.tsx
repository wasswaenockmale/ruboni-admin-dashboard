import React, { Fragment } from 'react'
import ReviewItem from "./ReviewItem/ReviewItem"

function ReviewCard() {
  return (
    <div className='col-start-1 p-1 pl-5 pr-5 lg:col-end-8 lg:col-start-6 md:row-start-3 md:col-start-2 lg:row-start-1 lg:h-80'>
      <div className='h-full p-2 bg-white rounded-md'>
        {/* heading  */}
        <div className='flex items-center justify-between font-roboto text-primary-500 h-1/6'>
          <h4>Reviews</h4>
          <button className='underline cursor-pointer '>
            view all
          </button>
        </div>
        <div className=' h-5/6'>
          <div className='max-h-full mt-2 overflow-auto'>
            {
              Array(5).fill(0).map((_item: any, index: number) => (
                <div
                  key={index}
                  className=' hover:box-content hover:shadow-sm'
                >
                  <ReviewItem />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard