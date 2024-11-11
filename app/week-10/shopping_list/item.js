"use client";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li 
      className="flex justify-between items-center p-2 bg-gray-800 rounded-lg shadow-md mb-2 cursor-pointer" 
      onClick={onSelect} // Trigger onSelect when clicked
    >
      <div className="text-lg font-semibold text-gray-50">
        {name} <span className="text-sm text-gray-400"> (Buy {quantity} in {category})</span> 
      </div>
    </li>
  );
};

export default Item;
