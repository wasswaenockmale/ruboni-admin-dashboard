import React from 'react';

const ITEMS_PER_PAGE = 10;

interface SetTotalItemsDisplayedProps{
  itemsPerPage: number
  handleValueSelected: (event: any) => void
  lengthOfData: number
}

function SetTotalItemsDisplayed(
  { itemsPerPage,
    handleValueSelected,
    lengthOfData
  }: SetTotalItemsDisplayedProps) {
  
  const handleSetValue = (index: number) => {
    const lastDisplayIndex = lengthOfData % 10 == 0 ?
      Math.floor(lengthOfData / ITEMS_PER_PAGE) :
      Math.floor(lengthOfData / ITEMS_PER_PAGE) + 1
    
    return index == lastDisplayIndex - 1 &&
      lengthOfData % 10 !== 0 ?
      ((index - 1) * ITEMS_PER_PAGE) + (lengthOfData - (ITEMS_PER_PAGE * (index - 1))) :
      ITEMS_PER_PAGE + (index * ITEMS_PER_PAGE)
  }
  
  return (
    <div className='bg-white rounded-md'>
      <select
        className="p-1 pl-5 pr-5 bg-transparent border rounded-md bg-secondary-50"
        name=""
        placeholder={`show ${itemsPerPage}`}
        onChange={handleValueSelected}
      >
        {
          Array(10).fill(0).map((_, index: number) => (
            <option
              // className={`${index < 10 ? 'b' : 'block'}`}
              key={index}
              value={handleSetValue(index)}>
              {handleSetValue(index)}
            </option>
          ))
        }
      </select>
    </div>
  );
}

export default SetTotalItemsDisplayed