import React from 'react'
import { CiMenuKebab } from "react-icons/ci";

interface TableProp {
  label: string[],
  data: any[],
}

function Table({}:TableProp) {
  return (
    <div className="w-full mt-5 overflow-y-auto max-h-96">
      <table className="w-full text-base text-left">
        <thead className="sticky top-0 text-white bg-primary-500">
          <tr>
            <th
              scope="col"
              className="px-6 py-4 "
            >ID</th>
            <th
              scope="col"
              className="px-6 py-4 "
            >Product Name</th>
            <th
              scope="col"
              className="px-6 py-4 "
            >Stock</th>
            <th
              scope="col"
              className="px-6 py-4 "
            >Sold</th>
            <th
              scope="col"
              className="px-6 py-4 "
            >Price</th>
            <th
              scope="col"
              className="px-6 py-4 "
            >Action</th>
          </tr>
        </thead>
        <tbody className="overflow-auto ">
          {
            Array(20).fill(0).map((_item, index: number) => (
              <tr
                key={index}
                className="border rounded-lg"
              >
                <td
                  className="px-6 py-4 "
                >P12{index + 1}</td>
                <td
                  className="px-6 py-4 "
                >Basket</td>
                <td
                  className="px-6 py-4 "
                >500</td>
                <td
                  className="px-6 py-4 "
                >300</td>
                <td
                  className="px-6 py-4 "
                >10293</td>
                <td
                  className="px-6 py-4"
                >
                  <CiMenuKebab
                    size={15}
                    className="cursor-pointer"
                  // onClick={() => {console.log("This is the work we have to do")}}
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table