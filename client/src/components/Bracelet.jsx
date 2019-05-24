import React from 'react';

const Bracelet = (props) => {
  console.log(props.bracelet)
  if (props.bracelet.imageurl === undefined) {
    return (
      <div> loading </div>
    )
  } else {
    return (
      <div>
        <img src={props.bracelet.imageurl[0]} height="150px" width="100px" />
        $ {props.bracelet.price}
      </div>
    )
  }
}

export default Bracelet;