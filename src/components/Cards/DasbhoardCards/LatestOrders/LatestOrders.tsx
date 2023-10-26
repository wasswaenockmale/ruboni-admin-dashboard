import React from 'react'

function LatestOrders() {
  return (
    <div className='p-1 lg:col-start-3 lg:col-end-8 md:row-start-4 lg:row-start-2 h-80'>
      <div className='h-full p-1 bg-white'>
        <div className='h-5text-base text-primary-500 font-roboto'>
          <h1>Latest orders</h1>
        </div>
        <div className='overflow-y-auto max-h-72'>
          <table className="w-full text-base text-left">
            <thead className="sticky top-0 bg-white text-secondary-100">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 "
                >ID</th>
                <th
                  scope="col"
                  className="px-6 py-4 "
                >Customer Name</th>
                <th
                  scope="col"
                  className="px-6 py-4 "
                >Date</th>
                <th
                  scope="col"
                  className="px-6 py-4 "
                >Amount</th>
                <th
                  scope="col"
                  className="px-6 py-4 "
                >Status</th>
              </tr>
            </thead>
            <tbody className="max-h-72">
              {
                Array(20).fill(0).map((_item, index: number) => (
                  <tr
                    key={index}
                    className="border rounded-lg"
                  >
                    <td
                      className="px-6 py-4 "
                    >OR2{index + 1}</td>
                    <td
                      className="px-6 py-4 "
                    >Mawanda Joel</td>
                    <td
                      className="px-6 py-4 "
                    >13/10/2023</td>
                    <td
                      className="px-6 py-4 "
                    >300</td>
                    <td
                      className="px-6 py-4 "
                    >pending</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LatestOrders