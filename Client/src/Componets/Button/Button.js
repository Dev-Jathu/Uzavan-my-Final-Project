import './Button.css'
import React from 'react';

export default function Button(props) {
  return (
    <div>
      <button className={props.class}>{props.name}</button>
    </div>
  );
}
//up to date