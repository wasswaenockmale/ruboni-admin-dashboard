"use client"
import React, { useEffect, useState } from "react";
import Selector from "@/components/Selector/Selector";
import Input from "@/components/TextInput/TextInput";
import SetTotalItemsDisplayed from "@/components/Pagination/DisplayedItemsNumber/SetTotalItemsDisplayed";
import OrderDetails from "@/components/OrderDetails/OrderDetails";

function Page() {
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");
	const [selectedStatus, setSelectedStatus] = useState<string>("");
	const [itemsPerPage, setItemsPerPage] = useState<number>(8);
	const [showDetail, setShowDetail] = useState<boolean>(false);
	
	const status = [
		{ value: "pending", label: "pending" },
		{ value: "cancelled", label: "cancelled" },
		{ value: "closed", label: "closed" }
	];

	// For demonstration purposes
	const sampleData = Array(88).fill(0).map((_item, index) => ({
		id: `REF-${index + 1}`,
		date: "12-10-2023",
		customer: "Anorld",
		product: "Basket",
		status:"pending",
		price: 10293,
	}));

	const currentData = sampleData.slice(0,itemsPerPage);

	const handleValueSelected = (event: any) => {
		setItemsPerPage(Number(event.target.value))
	}
	// Callback function to update the selected status
	const handleStatusChange = (selectedValue: string) => {
		setSelectedStatus(selectedValue);
	};

	const handleShowDetails = () => {
		setShowDetail(!showDetail);
	}
	
	return (
		<div className="w-full p-1">
			<div className="">
				<div className="flex items-center justify-between px-2 bg-white">
					<h4 className="text-lg">Orders</h4>
					{/* date range */}
					<div className="flex items-center gap-2 py-2">
						<Input
							name="dateFrom"
							id="date-from"
							type="date"
							handleSelectedDate={(event) => setStartDate(event.target.value)}
						/>
						<h5 className="text-lg">To</h5>
						<Input
							name="dateTo"
							id="date-to"
							type="date"
							handleSelectedDate={(event) => setEndDate(event.target.value)}
						/>
						<Selector
							containerStyle="w-40"
							listStyle=""
							placeHolder="status"
							isSearchable={true}
							options={status}
							// Pass the callback function to handle status changes
							onStatusChange={handleStatusChange}
						/>
					</div>
				</div>

				{/* display orders  */}
				<div className="my-2">
					<div className="flex justify-between p-1">
						<h5 className="opacity-50 ">
							Showing {itemsPerPage} of {sampleData.length} results
						</h5>
						<div className="flex items-center gap-1">
							<h5 className="opacity-50">Results per page:</h5>
							{/* Set items per page  */}
						<SetTotalItemsDisplayed
								itemsPerPage={itemsPerPage}
								handleValueSelected={handleValueSelected}
								lengthOfData={sampleData.length}
							/>
						</div>
					</div>
				</div>
				
				<div className="w-full overflow-y-auto bg-white max-h-fit">
					<table className="w-full text-base text-left">
						<thead className="sticky top-0 text-white bg-primary-500/50">
							<tr>
								<th
									scope="col"
									className="px-6 py-4 "
								>ID</th>
								<th
									scope="col"
									className="px-6 py-4 "
								>DATE</th>
								<th
									scope="col"
									className="px-6 py-4 "
								>CUSTOMER</th>
								<th
									scope="col"
									className="px-6 py-4 "
								>PRODUCT</th>
								<th
									scope="col"
									className="px-6 py-4 "
								>STATUS</th>
								<th
									scope="col"
									className="px-6 py-4 "
								>PRICE</th>
							</tr>
						</thead>
						<tbody className="">
							{currentData.map((item, index) => (
								<tr
									key={index}
									className="border rounded-lg cursor-pointer hover:bg-secondary-50/25"
									onClick={() => setShowDetail(true)}
								>
									<td className="px-6 py-4">{item.id}</td>
									<td className="px-6 py-4">{item.date}</td>
									<td className="px-6 py-4">{item.customer}</td>
									<td className="px-6 py-4">{item.product}</td>
									<td className="px-6 py-4">
										<div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary-500/25 w-fit text-primary-700">
											{item.status}
											<span className="w-2 h-2 rounded-full bg-primary-500"></span>
										</div>
									</td>
									<td className="px-6 py-4">${item.price}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<OrderDetails
				showDetail={showDetail}
				handleShowDetail={handleShowDetails}
				orderData=""
			/>
		</div>
	);
}

export default Page;
