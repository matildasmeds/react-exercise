import React from 'react';

function Button(props) {
  return <button className='b ph3 pv2 input-reset ba b--black bg-transparent hover-white hover-bg-blue pointer f6'>
    {props.label}
  </button>
}

export default Button;
