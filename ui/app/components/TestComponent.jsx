import React from 'react';

const TestComponent = () => {
  function handleClick() {
    debugger;
    alert('Button clicked');
  }
  return (
    <button onClick={() => {
      alert('clicked');
    }}>Click Me</button>
  );
};

export default TestComponent;
