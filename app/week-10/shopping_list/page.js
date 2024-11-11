"use client";

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas'; // Import MealIdeas component
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(""); // State for selected item

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    // Clean item name for API usage
    const cleanedName = item.name.split(',')[0].replace(/[^a-zA-Z ]/g, "").trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-black-20 p-3">
      <div className="max-w-xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-white-700 mb-6">Shopping List</h1>

        <NewItem onAddItem={handleAddItem} />

        <div className="flex space-x-4">
          <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass handler */}
          
          {selectedItemName && (
            <div className="meal-ideas-container">
              <MealIdeas ingredient={selectedItemName} /> {/* Display MealIdeas */}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
