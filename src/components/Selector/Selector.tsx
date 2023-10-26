import React, { useState, useRef, useEffect, useCallback } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';

interface Option {
	value: string;
	label: string;
}

interface SelectorProps {
	containerStyle: string;
	listStyle: string;
	placeHolder: string;
	isSearchable: boolean;
	options: Option[];
	onStatusChange: (value:string) => void
}

function Selector({
	containerStyle,
	listStyle,
	placeHolder,
	isSearchable,
	options,
	onStatusChange
}: SelectorProps) {
	const [search, setSearch] = useState<string>("");
	const [selected, setSelected] = useState<string>("");
	const [showOptions, setShowOptions] = useState<boolean>(false);
	const listRef = useRef<HTMLElement | null>(null);

	const handleShowOptions = useCallback(() => {
		setShowOptions(!showOptions);
	},[showOptions]);

	useEffect(() => {
		function handleClickOutSide(event: MouseEvent) {
			if (listRef.current && !listRef.current.contains(event.target as Node)) {
				handleShowOptions()
			}
		}
		
		if (showOptions) {
			document.addEventListener('click', handleClickOutSide);
		}

		return () => {
			document.removeEventListener('click', handleClickOutSide);
		}
	}, [handleShowOptions, showOptions]);
	
	return (
		<div className={`${containerStyle} relative cursor-pointer`}>
			<div className='flex items-center justify-between w-full p-1 border rounded-md'>
				{selected ?
					(<div className='flex items-center justify-between w-full px-2 border rounded-md bg-secondary-100/25'>
						{options?.find(element => element?.value === selected)?.label}
						<span
							className='cursor-pointer text-secondary-900'
							onClick={() => {
								setSelected("")
								handleShowOptions()
								onStatusChange("")
							}}
						>x</span>
					</div>)
					: placeHolder}
				<BiChevronDown
					size={20}
					onClick={handleShowOptions}
				/>
			</div>
			<ul
				ref={listRef as React.RefObject<HTMLUListElement>}
				className={`top-100 z-20 mt-2 absolute overflow-y-auto bg-white max-h-60 border ${showOptions ? "block" : 'hidden'}`}
				style={{ width: '100%' }}
			>
				<div className={`sticky top-0 flex items-center px-2 bg-white ${isSearchable ? 'block' : 'hidden'}`}>
					<AiOutlineSearch
						size={20}
						className="text-gray-700 "
					/>
					<input
						type="text"
						name="searchText"
						placeholder='search...'
						className='p-2 text-gray-700 outline-none'
						onChange={(event) => setSearch(event.target.value)}
					/>
				</div>
				{options?.map((item, index) => (
					<li
						key={index}
						onClick={() => {
							setSelected(item.value)
							onStatusChange(item.value)
							handleShowOptions()
						}}
						className={`p-2 text-sm hover:bg-primary-300 hover:text-white ${item.label.startsWith(search) ? 'block' : 'hidden'}`}
					>
						{item.label}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Selector;
