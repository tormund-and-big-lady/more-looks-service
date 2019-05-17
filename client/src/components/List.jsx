import React from 'react'

const List = (props) => {
  // return (
  //   <div>
  //     {console.log('hi', props.product[0])}
  //     {/* <img src={props.product[0].imageurl} /> */}
  //   </div>
  // )
  if (props.product[0] === undefined) {
    return (
      <div>loading</div>
    )
  } else {
    return (
      <div>
        {/* {console.log(props.product[0])} */}
        <img src={props.product[0].imageurl} height="200" width="200"/>
      </div>
    )
  }
}

export default List;