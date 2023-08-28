// ui library
// here can be dropdowns , buttons, typography and other small independent ui components

import React from 'react';

const ExampleDropdown = () => {
  return (
    <div className={'dropdown'}>
      <div className={'selector'}>selected value</div>

      <div className={'dropdown-content'}>list of optins</div>
    </div>
  );
};

export default ExampleDropdown;