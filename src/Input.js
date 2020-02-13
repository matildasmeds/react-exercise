import React from 'react';

function Input(props) {
  return <div className='mv3'>
    <label className="db fw4 lh-copy f6" htmlFor={props.name}>{props.label}</label>
    <input type={props.type}
           name={props.name}
           onChange={e => props.callBack(e.target.value)}>
    </input>
  </div>;
}

export default Input;
