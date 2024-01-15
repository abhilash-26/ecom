import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setCart, removeFromCart} from '../redux/features/product';

function Cart() {
	const [price, setPrice] = useState(0);
	const items = useSelector((state) => state.product.cart);
	const dispatch = useDispatch();
	useEffect(() => {
		let total = 0;
		if (items) {
			items.forEach((item) => (total += item.price * item.count));
		}

		setPrice(total);
	}, [items]);
	const handleIncrement = (item) => {
		dispatch(setCart(item));
	};
	const handleDecrement = (id) => {
		dispatch(removeFromCart(id));
	};
	return (
		<div className='flex justify-between'>
			<div>
				{items.length == 0 && <p className='text-4xl w-[80vw] h-[80vh]'>Your basket is empty!!!!!</p>}
				{items.map((item) => (
					<div className='flex items-center m-1 border-b-2'>
						<div>
							<img src={item.image} alt='' className='w-24 m-6' />
						</div>
						<div>
							<p className='w-[400px]'>{item.name}</p>
							<p>
								{item.price.toLocaleString('en-US', {
									style: 'currency',
									currency: 'INR',
								})}
							</p>
						</div>
						<div className='flex items-center m-10'>
							<button className='rounded-full border border-sky-500 w-6 m-1 text-xl flex justify-center' onClick={() => handleDecrement(item._id)}>
								-
							</button>
							{item.count}
							<button className='rounded-full w-6 m-1 border border-sky-500 text-lg' onClick={() => handleIncrement(item)}>
								+
							</button>
						</div>
					</div>
				))}
			</div>
			{price !== 0 && (
				<div className='m-10 border-b-2 h-max p-10 flex flex-col items-start'>
					Price Total ({items.length} item)
					<p>
						{price.toLocaleString('en-US', {
							style: 'currency',
							currency: 'INR',
						})}
					</p>
				</div>
			)}
		</div>
	);
}

export default Cart;
