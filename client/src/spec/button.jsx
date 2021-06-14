import React from 'react';

function Button({label}) {
  return <div data-testId="button" className="button-style">{label}</div>
}

export default Button;