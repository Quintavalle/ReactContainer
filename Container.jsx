import React, { useState } from 'react';

const Container = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ backgroundColor: 'white', border: '2px solid red', margin: '10px', padding: '10px' }}>
      <h2 onClick={toggleCollapsed} style={{ cursor: 'pointer' }}>{title}</h2>
      {!collapsed && children}
    </div>
  );
};

export default Container;
