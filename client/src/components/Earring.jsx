import React from 'react';
import style from './earring.css';

const Earring = (props) => {
  if (props.earring.imageurl === undefined) {
    return (
      <div> loading </div>
    )
  } else {
    return (
      <div>
        <img src={props.earring.imageurl[0]} height="103px" width="77px"/>
        <span className={style.price}>$ {props.earring.price} </span>
      </div>
    )
  }
}

export default Earring;