import React from 'react'

interface DisplayPageButtonsProps{
  currentPage: number
  handlePageChange: (n: number) => void
  itemsPerPage: number
  data: any
}
function DisplayPageButtons({currentPage, handlePageChange, itemsPerPage,data}: DisplayPageButtonsProps) {
  return (
    <div className="flex justify-center gap-1 mt-2">
      <button
        className="p-2 mr-1 text-white rounded-md bg-primary-500"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </button>
      {currentPage > 2 && (
        <>
          <button
            className={`p-0 pl-4 pr-4 border rounded-md ${1 === currentPage ? " border border-primary-500 text-primary-500" : ""
              }`}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
          {currentPage > 3 && <span className="p-0 pl-4 pr-4 border rounded-md">...</span>}
        </>
      )}
      {Array(Math.ceil(data.length / itemsPerPage))
        .fill(0)
        .map((_, pageIndex) => (
          (pageIndex + 1 === currentPage || (pageIndex + 1 >= currentPage - 1 && pageIndex + 1 <= currentPage + 1)) ? (
            <button
              key={pageIndex}
              className={`p-0 pl-4 pr-4 border rounded-md ${pageIndex + 1 === currentPage ? " border border-primary-500 text-primary-500" : ""
                }`}
              onClick={() => handlePageChange(pageIndex + 1)}
            >
              {pageIndex + 1}
            </button>
          ) : null
        ))}
      {currentPage < Math.ceil(data.length / itemsPerPage) - 1 && (
        <>
          {currentPage < Math.ceil(data.length / itemsPerPage) - 2 && <span className="p-0 pl-4 pr-4 border rounded-md">...</span>}
          <button
            className={`p-0 pl-4 pr-4 border rounded-md ${Math.ceil(data.length / itemsPerPage) === currentPage ? "bg-primary-500 text-white" : ""
              }`}
            onClick={() => handlePageChange(Math.ceil(data.length / itemsPerPage))}
          >
            {Math.ceil(data.length / itemsPerPage)}
          </button>
        </>
      )}
      <button
        className="p-2 ml-1 text-white rounded-md shadow-md bg-primary-500"
        disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default DisplayPageButtons