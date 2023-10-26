"use client"

import React from 'react';
import { Form, Formik, FormikProps, FormikValues } from 'formik';
import logo from '../../../../../public/images/Avator.png';
import FileInput from '@/components/FileInput/FileInput';
import TextInput from '@/components/FormikInput/index'
import ImageItem from '@/components/ImageItem/ImageItem';
import { useRouter } from 'next/navigation';

function Page() {
	 
	const router = useRouter();
  
	const initialValues = {
		productName: "",
		price: "",
		description: "",
		category: "",
		vendorName: "",
		vendorID: "",
		productLocation: "",
		uploadDate: ""
	};

	const handleSubmit = (values: FormikValues) => {
		console.log(values)
	};
  
	return (
		<div className='p-2'>
			<div className='w-full p-5 bg-white rounded-md'>
				<div className='flex justify-between gap-10 mb-2'>
					<button
						className='underline text-primary-500'
						onClick={() => router.push('/dashboard/products')}
					>
						BACK
					</button>
					<h3>Add Product</h3>
					<span></span>
				</div>
				<div className='flex flex-col w-full gap-5 p-2 lg:flex-row'>
					<div className='p-2 border rounded-md lg:w-2/4'>
						<div>
							<h4>Add Image</h4>
							<FileInput />
							<div className='p-2 mt-2 overflow-y-auto max-h-60'>
								{
									Array(5).fill(0).map((_, index: number) => (
										<ImageItem
											key={index}
											image={logo}
											name='logo.png'
											size='43.23 KB'
											handleClick={() => { console.log("Deleting image") }}
										/>
									))
								}
							</div>
						</div>
					</div>
					<div className='h-full p-2 border rounded-md lg:w-2/4'>
						<Formik
							initialValues={initialValues}
							onSubmit={handleSubmit}
						>
							{(props: FormikProps<any>) => (
								<Form
									className='flex flex-col'
								>
									<TextInput
										label='Product Name'
										type='text'
										name='productName'
										width=' w-full'
									/>
									<TextInput
										label='Description'
										type='text'
										name='description'
										width=' w-full'
									/>
									<div className='flex flex-col lg:flex-row'>
										<TextInput
											label='Price'
											type='text'
											name='price'
											width=' w-full'
										/>
										<TextInput
											label='Discount percentage'
											type='text'
											name='discount'
											width=' w-full'
										/>
									</div>
									<div className='flex flex-col lg:flex-row'>
										<TextInput
											label='Vendor Name'
											type='text'
											name='vendorName'
											width=' w-full'
										/>
										<TextInput
											label='Select Vendor ID'
											type='text'
											name='vendorID'
											width=' w-full'
										/>
									</div>
									<TextInput
										label='Product location'
										type='text'
										name='productLocation'
										width=' w-full'
									/>
									<TextInput
										label='Category'
										type='text'
										name='category'
										width=' w-full'
									/>
									<TextInput
										label='Upload date'
										type='date'
										name='uploadDate'
										width=' w-full'
									/>
									<button
										className='self-end p-1 px-2 mt-5 text-white rounded-md bg-primary-500'
										type='submit'
										disabled={props.isSubmitting || props.dirty || props.isValidating}
									>
										Publish Product
									</button>
								</Form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page