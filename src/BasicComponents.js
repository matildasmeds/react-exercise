import React from 'react';

function H1(props) {
  return <h1
    className="baskerville fw1 ph3 ph0-l bb b--black-10 mb2 pb1">
    {props.label}
  </h1>
}

function Button(props) {
  const doNothing = () => {};
  const callBack = props.callBack || doNothing;
  return <button className='ph3 pv2 mt2 mr2 input-reset ba b--black-25 bg-transparent hover-white hover-bg-blue pointer f6'
      onClick={callBack}
    >
    {props.label}
  </button>
}

function Input(props) {
  return <div className='mv3'>
    <label className="db fw4 lh-copy f6" htmlFor={props.name}>{props.label}</label>
    <input type={props.type}
           name={props.name}
           value={props.value}
           onChange={e => props.callBack(e.target.value)}>
    </input>
  </div>;
}

function NavLink(props) {
  return <a className="link dim black f6 pr3 f5-ns dib mr3"
            href={props.path} title={props.label}>
    {props.label}
  </a>;
}

function Alert(props) {
  let className = '';
  if (props.alert.status === 'success') {
    className += 'b--green br2 pa3 ba bw1';
  } else if (props.alert.status === 'error') {
    className += 'b--red br2 pa3 ba bw1';
  }
  return <div className={className}>{props.alert.message}</div>;
}

export { H1, Input, Button, NavLink, Alert };
