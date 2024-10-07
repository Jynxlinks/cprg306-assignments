"use client"; 

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [groupByCategory, setGroupByCategory] = useState(false);

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = sortedItems.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const handleGrouping = () => {
    setGroupByCategory(true); 
  };

  return (
    <div>
      <div className="mb-4 flex space-x-2">
        <button
          onClick={() => {
            setSortBy("name");
            setGroupByCategory(false); 
          }}
          className={`${sortBy === "name" && !groupByCategory ? 'bg-blue-300' : 'bg-blue-500'} text-white py-2 px-4 rounded`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => {
            setSortBy("category");
            setGroupByCategory(false); 
          }}
          className={`${sortBy === "category" && !groupByCategory ? 'bg-blue-300' : 'bg-blue-500'} text-white py-2 px-4 rounded`}
        >
          Sort by Category
        </button>
        <button
          onClick={handleGrouping}
          className={`${groupByCategory ? 'bg-blue-300' : 'bg-blue-500'} text-white py-2 px-4 rounded`}
        >
          Group by Category
        </button>
      </div>
      <ul className="list-none">
        {groupByCategory ? (
          Object.keys(groupedItems).sort().map((category) => (
            <li key={category}>
              <h2 className="text-2xl font-bold capitalize mt-4">{category}</h2>
              <ul>
                {groupedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </li>
          ))
        ) : (
          sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))
        )}
      </ul>
    </div>
  );
}
