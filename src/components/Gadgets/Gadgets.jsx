import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const categories = [
    { name: "All Product", key: "all" },
    { name: "Laptops", key: "laptop" },
    { name: "Phones", key: "phone" },
    { name: "Accessories", key: "accessory" },
    { name: "Smart Watches", key: "smartwatch" },
    { name: "MacBook", key: "macbook" },
    { name: "Iphone", key: "iphone" }
];

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, []);

    // Filtering logic
    const filteredGadgets = selectedCategory === 'all'
        ? gadgets
        : gadgets.filter(gadget => 
            gadget.category && gadget.category.toLowerCase().includes(selectedCategory)
        );

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-10 mb-20">
                Explore Cutting-Edge Gadgets
            </h1>
            <div className="flex gap-6 justify-center">
                {/* All Product Section (Sidebar) */}
                <div className="flex flex-col gap-4 w-56">
                    {categories.map(cat => (
                        <button
                            key={cat.key}
                            className={`rounded-xl text-left px-6 py-4 font-semibold text-lg transition ${
                                selectedCategory === cat.key
                                    ? 'bg-purple-600 text-white shadow-md'
                                    : 'bg-white text-purple-600 border border-purple-200 hover:bg-purple-100'
                            }`}
                            onClick={() => setSelectedCategory(cat.key)}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
                {/* Products Grid */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                        {filteredGadgets.map(gadget => (
                            <Gadget key={gadget.id} gadget={gadget} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadgets;