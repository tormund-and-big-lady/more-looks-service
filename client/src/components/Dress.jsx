import React from 'react';
import style from './Dress.css';

const Dress = (props) => {
  if (props.dress.imageurl === undefined) {
    return (
      <div> loading </div>
    )
  } else {
    return (
      <div>
        {/* {props.dress.imageurl.map(pic => {
          return <img src={pic} height="250px" width="140px"/>
        })} */}
        {/* {console.log('dress',props.dress.imageurl[0])} */}
        <img src={props.dress.imageurl[0]} height="150%" width="150%" className={style.dressImage}/>
       <div> $ {props.dress.price} </div>
      </div>
    )
  }
}

export default Dress;