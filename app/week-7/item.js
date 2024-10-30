import React from 'react';

export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 mb-4 bg-blue-950 rounded-lg">
      <div className="text-3xl font-semibold">{name}</div>
      <div className="text-gray-300 text-lg">Buy {quantity} in {category}</div>
    </li>
  );
}
