"use client";
import { useState } from 'react';

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('Produce');

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

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            id: Math.random().toString(36).substring(2, 15),
            name,
            quantity,
            category,
        };

        console.log(item);
        alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        onAddItem(item);

        setName('');
        setQuantity(1);
        setCategory('Produce');
    };

    const buttonStyles = "bg-blue-500 hover:bg-blue-700 text-white rounded-full py-2 px-4";
    const disabledStyles = "bg-gray-500 text-white rounded-full py-2 px-4";

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Item!</h2>
            <div className="mb-4">
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Item name"
                    className="border border-gray-300 p-2 rounded w-full text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex mb-4">
                <div className="flex-grow">
                    <label className="block text-gray-700 mb-1">Quantity</label>
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={decrement}
                            className={quantity === 1 ? disabledStyles : buttonStyles}
                            disabled={quantity === 1}
                        >
                            -
                        </button>
                        <div className="bg-gray-100 text-black rounded-lg p-2 w-12 text-center border border-gray-300 mx-2">
                            {quantity}
                        </div>
                        <button
                            type="button"
                            onClick={increment}
                            className={quantity === 20 ? disabledStyles : buttonStyles}
                            disabled={quantity === 20}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="ml-4 w-48"> 
                    <label htmlFor="category" className="block text-gray-700 mb-1">Category</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    >
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <button type="submit" className={`${buttonStyles} w-full`}>
                Add Item
            </button>
        </form>
    );
}
