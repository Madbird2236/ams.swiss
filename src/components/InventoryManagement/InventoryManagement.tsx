import React, { useEffect, useState } from 'react';
import { fetchInventory, addInventoryItem, removeInventoryItem } from '../../services/inventoryService';

const InventoryManagement = () => {
    const [inventory, setInventory] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', quantity: 0 });

    useEffect(() => {
        const loadInventory = async () => {
            const data = await fetchInventory();
            setInventory(data);
        };
        loadInventory();
    }, []);

    const handleAddItem = async () => {
        if (newItem.name && newItem.quantity > 0) {
            await addInventoryItem(newItem);
            setInventory([...inventory, newItem]);
            setNewItem({ name: '', quantity: 0 });
        }
    };

    const handleRemoveItem = async (item) => {
        await removeInventoryItem(item);
        setInventory(inventory.filter(i => i !== item));
    };

    return (
        <div>
            <h1>Inventory Management</h1>
            <div>
                <input
                    type="text"
                    placeholder="Item Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={newItem.quantity}
                    onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
                />
                <button onClick={handleAddItem}>Add Item</button>
            </div>
            <ul>
                {inventory.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.quantity}
                        <button onClick={() => handleRemoveItem(item)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryManagement;