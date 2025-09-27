import React, { useState } from 'react';

const KitchenDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  
  const kitchenItems = [
    {
      title: 'Coffee & Machines',
      hasSubmenu: true,
      submenuItems: [
        'illy Coffee Capsules & Beans',
        'illy Coffee Machines',
        'illy Art Collection',
        'All Coffee & Machines'
      ]
    },
    {
      title: 'Kitchen Taps',
      hasSubmenu: true,
      submenuItems: [
        'Kitchen Mixer Tap',
        'Kitchen Pull Out Mixer Tap',
        'All Kitchen Taps'
      ]
    },
    {
      title: 'Kitchen Sinks',
      hasSubmenu: true,
      submenuItems: [
        'Single Bowl Under mount Sink',
        'Double Bowl Under mount Sink',
        'Single Bowl Inset Sink',
        'Double Bowl Inset Sink',
        'Kitchen Sink Accessories',
        'All Kitchen Sinks'
      ]
    },
    {
      title: 'Water Purification Units',
      hasSubmenu: true,
      submenuItems: [
        'Water Purifiers',
        'All Water Purification Units'
      ]
    },
    {
      title: 'Kitchen Tools & Gadgets',
      hasSubmenu: true,
      submenuItems: [
        'Baking Set',
        'Storage & Containers',
        'Dish Drying Racks',
        'Can Openers',
        'Shop Now',
        'Waste Bins',
        'Kitchen Utensils',
        'Knives & Chopping Board',
        'Food Prep Tools',
        'Mixers & Blenders',
        'Kitchen Sink Accessories',
        'All Kitchen Tools & Gadgets'
      ]
    }
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setActiveSubmenu(null);
  };

  const handleSubmenuEnter = (submenuIndex) => {
    setActiveSubmenu(submenuIndex);
  };

  const handleSubmenuLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <div className="p-4 bg-white">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded"
        >
          Kitchen
          <span className="ml-2">
            {isDropdownOpen ? '▲' : '▼'}
          </span>
        </button>
        
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded shadow-lg z-50">
            {kitchenItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleSubmenuEnter(index)}
                onMouseLeave={handleSubmenuLeave}
              >
                <div className="px-4 py-3 cursor-pointer border-b border-gray-100 flex items-center justify-between">
                  <span className="text-gray-700">{item.title}</span>
                  {item.hasSubmenu && (
                    <span className="text-gray-400">→</span>
                  )}
                </div>
                
                {item.hasSubmenu && activeSubmenu === index && (
                  <div className="absolute top-0 left-full ml-1 w-56 bg-white border border-gray-200 rounded shadow-lg z-60">
                    {item.submenuItems.map((submenuItem, submenuIndex) => (
                      <div
                        key={submenuIndex}
                        className="px-4 py-2 cursor-pointer text-gray-600 border-b border-gray-50 last:border-b-0"
                      >
                        {submenuItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default KitchenDropdown;