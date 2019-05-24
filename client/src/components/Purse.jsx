import React from 'react';
// import axios from 'axios';


const Purse = (props) => {
  if (props.purse.imageurl === undefined) {
    return (
      <div> loading </div>
    )
  }
  if (props.purse.imageurl.length === 1) {
    return (
      <div>
        <img src={props.purse.imageurl[0]} />
      </div>
    )
  } else {
    return (
      <div>
        {/* {props.purse.imageurl.map(pic => {
          return <img src={pic} height="150px" width="140px"/>
        })} */}
        <img src={props.purse.imageurl[0]} height="103px" width="105px"/>
        $ {props.purse.price}
      </div>
    )
  }
}

export default Purse;