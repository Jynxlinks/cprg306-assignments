import { useState, useEffect } from 'react';
import { getItems, addItem, deleteItem } from '../_services/shopping-list-service';

const ShoppingList = ({ user }) => {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    try {
      const itemsData = await getItems(user.uid);
      setItems(itemsData);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      const itemId = await addItem(user.uid, newItem);
      setItems([...items, { ...newItem, id: itemId }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItem(user.uid, itemId);
      setItems(items.filter(item => item.id !== itemId)); // Remove the item from the state
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user.uid]);

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddItem({ name: 'New Item', quantity: 1, category: 'produce' })}>
        Add Item
      </button>
    </div>
  );
};

export default ShoppingList;