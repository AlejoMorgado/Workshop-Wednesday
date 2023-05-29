import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabId) => {
    setActiveTab(prevTab => tabId === prevTab ? prevTab : tabId);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <div>Content for Tab 1</div>;
      case 2:
        return <div>Content for Tab 2</div>;
      case 3:
        return <div>Content for Tab 3</div>;
      default:
        return null;
    }
  };

  return (
    <div className="tabs">
    <h2>Tabs</h2>
      <div className="tab-buttons">
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={activeTab === 3 ? 'active' : ''}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default Tabs;
