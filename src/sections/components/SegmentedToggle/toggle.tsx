import { useState } from 'react';
import './toggle.scss'

interface SegmentedToggleProps {
  defaultValue?: 'menu' | 'categories';
  onValueChange?: (value: 'menu' | 'categories') => void;
}

export default function SegmentedToggle({ 
  defaultValue = 'menu',
  onValueChange 
}: SegmentedToggleProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleToggle = (value: 'categories' | 'menu') => {
    setActiveTab(value);
    onValueChange?.(value);
  };

  return (
    <div className="segmented-toggle-container">
        <button
        className={`toggle-option ${activeTab === 'menu' ? 'active' : ''}`}
        onClick={() => handleToggle('menu')}
      >
        Menu
      </button>
      <button
        className={`toggle-option ${activeTab === 'categories' ? 'active' : ''}`}
        onClick={() => handleToggle('categories')}
      >
        Categories
      </button>
      
    </div>
  );
}