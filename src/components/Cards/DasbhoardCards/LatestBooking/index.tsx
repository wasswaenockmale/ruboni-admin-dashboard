"use client"

import React, { Fragment } from 'react'
import { Form, Formik, FormikProps } from 'formik';
import LatestItemDisplay from "./LatestItemDisplay"

function Index() {
  return (
    <div className='col-start-1 row-start-2 p-1 lg:row-end-2 lg:col-end-3 h-80 md:row-start-3'>
      <div className='h-full p-2 bg-white'>
        <h1 className='text-base font-roboto text-primary-500'>Latest Accom Bookings</h1>
        <h5 className='mt-2 font-roboto'>Oct, 2023</h5>
        {/* Date filter */}
        {/* <div>
        <Formik
          initialValues={{
            startFrom: "",
            endAt:""
          }}
          onSubmit={(values) => console.log(values)}
        >
          {() => 
            <Form className='flex gap-1'>
              <DateInput
                label='From'
                name='startFrom'
                type='date'
                width='w-2/4'
              />
              <DateInput
                label='To'
                name='endAt'
                type='date'
                width='w-2/4'
              />
            </Form>
          }
        </Formik>
      </div> */}
        <div className='overflow-auto max-h-56'>
          {
            Array(10).fill(0).map((_item: any, index: number) => (
              <Fragment key={index}>
                <LatestItemDisplay index={index} />
              </Fragment>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Index