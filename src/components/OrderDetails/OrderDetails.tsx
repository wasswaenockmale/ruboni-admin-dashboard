import React from 'react'

interface OrderDetailsProps{
  orderData: any
  showDetail: boolean
  handleShowDetail: () => void
}
function OrderDetails({orderData, showDetail, handleShowDetail}:OrderDetailsProps) {
  return (
    <div
      className={`${showDetail ? 'flex fixed top-0 left-0 bg-secondary-50/50 w-full h-full justify-center items-center' : 'hidden'}`}
    >
      <div
        className={`flex w-2/4 bg-white p-2 flex-col h-fit rounded-md`}
      >
        <h1
          className='text-base font-bold'
        >
          Order Details
        </h1>
        <div
          className='mb-5'
        >
          <h3>
            Order ID: {}
          </h3>
          <h3>
            Customer ID: {}
          </h3>
          <h3>
            Order Date: {}
          </h3>
          <h3 className='flex items-center gap-2'>
            Status:
            <span className={`rounded-full px-2 p-1 bg-primary-100/50 text-primary-500`}>{}</span>
          </h3>
        </div>

        <div
          className='mb-5'
        >
          <h1
            className='font-bold '
          >
            Customer Information
          </h1>
          <h4>Customer Name: </h4>
        </div>

        {/* Order Items */}
        <div>
          <h1
            className='font-bold '
          >Order Items</h1>
          {/* table  */}
          <div>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price per Unit</th>
                  <th>Item Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {
                  Array(0).fill(0).map((_item:any, index: number) => (
                    <tr
                      key={index}
                    >
                      <td>{ }</td>
                      <td>{ }</td>
                      <td>{ }</td>
                      <td>{ }</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <h5>Total Order Price: { }</h5>
        </div>

        {/* close the modal  */}
        <div
          className='bottom-0 right-0 flex justify-between'
        >
          <div></div>
          <button
            onClick={handleShowDetail}
          >
            <span className='p-1 px-2 rounded-full text-primary-500 bg-primary-500/25'>close</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails