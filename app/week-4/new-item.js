"use client";
import { useState } from 'react';

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    const buttonStyles ="bg-blue-400 hover:bg-blue-700 text-white rounded-full py-2 px-4 mr-3";
    const disabledStyles ="bg-gray-500 text-white rounded-full py-2 px-4 mr-3";

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-slate-300 p-3 rounded-lg shadow-md flex items-center">
                <button
                    onClick={decrement}
                    className={quantity === 1 ? disabledStyles : buttonStyles}
                    disabled={quantity === 1}
                >
                    -
                </button>
                <button
                    onClick={increment}
                    className={quantity === 20 ? disabledStyles : buttonStyles}
                    disabled={quantity === 20}
                >
                    +
                </button>
                <div className="bg-white text-black rounded-lg p-2 ml-8 w-12 text-center border border-black">
                    {quantity}
                </div>
            </div>
        </div>
    );
}