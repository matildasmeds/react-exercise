import React from 'react';
import styled from 'styled-components';

function H1(props) {
  return <h1
    className="baskerville fw1 ph3 ph0-l bb b--black-10 mb2 pb1">
    {props.label}
  </h1>
}

const StyledButton = styled.button`
  border-radius: .25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-size: 0.25em;
  background-color: ${props => (props.bgcolor || '#DDD')};
  color: ${props => (props.color || 'black')};
  &:hover {
    background: #CCC;
    color: black;
    cursor: pointer;
  }
`

function Button(props) {
  const doNothing = () => {};
  const callBack = props.callBack || doNothing;
  return <StyledButton bgcolor={props.bgcolor} color={props.color}
      onClick={callBack}
    >{props.label}
    </StyledButton>;
}

function Input(props) {
  return <div className='mv3'>
    <label className="db fw4 lh-copy f6" htmlFor={props.name}>{props.label}</label>
    <input className="b--black-25"
           type={props.type}
           name={props.name}
           id={props.name}
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
