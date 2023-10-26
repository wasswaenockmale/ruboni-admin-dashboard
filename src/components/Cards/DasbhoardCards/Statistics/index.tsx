'use client'

import React from "react";
import LineChart from "@/components/LineChart"

function StatisticsCard() {
  return (
    <div className='hidden col-start-1 p-1 lg:row-start-1 lg:col-end-6 lg:col-start-2 md:block h-80'>
      <div className="w-full h-full p-4 bg-white rounded-md">
        <h1 className="text-base text-primary-500 font-poppins">Sales statistics</h1>
        <LineChart />
      </div>
    </div>
  )
}

export default StatisticsCard;