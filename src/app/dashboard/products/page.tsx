"use client"

import DisplayPageButtons from "@/components/Pagination/DisplayPageButtons/DisplayPageButtons";
import SetTotalItemsDisplayed from "@/components/Pagination/DisplayedItemsNumber/SetTotalItemsDisplayed";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci"
import Select from "react-select";

function Page() {

  const router = useRouter();
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);

  // handle start and end indexes for the current page.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  

  // For demonstration purposes
  const sampleData = Array(95).fill(0).map((_item, index) => ({
    id: `P12${index + 1}`,
    productName: "Basket",
    stock: 500,
    sold: 300,
    price: 10293,
  }));

  const currentData = sampleData.slice(startIndex, endIndex);

  // handle page changes.
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // callback function for handling Values selection
  const handleValueSelected = (event: any) => {
    setItemsPerPage(Number(event.target.value))
  }
  return (
    <div
      className="flex flex-col w-full"
    >
      <div className="w-full p-2 pl-1">
        <div className="flex justify-between w-full p-1 bg-white rounded-md">
          <div
            className="flex gap-5 px-5"
          >
            <Select
              placeholder="Category"
            />
            <Select
              placeholder="Price"
            />
            <Select
              placeholder="Date"
            />
          </div>
          <button
            className="flex items-center gap-2 p-2 pl-4 pr-4 text-base text-white rounded-md bg-primary-500 font-roboto"
          onClick={() => {router.push("/dashboard/products/addProduct")}}
          >
            <span className="flex items-center justify-center w-4 h-4 text-sm text-white border border-white rounded-full">+</span>
            Add Product
          </button>
        </div>
      </div>
      
      <div className="w-full p-2 pl-1">
        <div className="relative w-full p-2 bg-white rounded-md" >
          <h3 className="font-semibold font-roboto">Products</h3>
          <div className="w-full overflow-y-auto max-h-fit">
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
              <tbody className="">
                {currentData.map((item, index) => (
                  <tr key={index} className="border rounded-lg">
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4">{item.productName}</td>
                    <td className="px-6 py-4">{item.stock}</td>
                    <td className="px-6 py-4">{item.sold}</td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">
                      <CiMenuKebab size={15} className="cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-2">
            {/* Set items per page  */}
            <SetTotalItemsDisplayed
              itemsPerPage={itemsPerPage}
              handleValueSelected={handleValueSelected}
              lengthOfData={sampleData.length}
            />
            
            {/* Displayable buttons  */}
            <DisplayPageButtons
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              data={sampleData}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;