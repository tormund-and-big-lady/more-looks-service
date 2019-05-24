import React from 'react';

const Shoe = (props) => {
  if (props.shoe.imageurl === undefined) {
    return (
      <div> loading </div>
    )
  } else {
    return (
      <div>
        {/* {props.shoe.imageurl.map(pic => {
          return <img src={pic} height="150px" width="140px"/>
        })} */}
        <img src={props.shoe.imageurl[0]} height="103px" width="78px"/>
        $ {props.shoe.price}
      </div>
    )
  }
}

export default Shoe;