import React from 'react';
import style from './shoe.css';


class Shoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
    this.decreaseIndex = this.decreaseIndex.bind(this);
    this.increaseIndex = this.increaseIndex.bind(this);
  }

  decreaseIndex() {
    if (this.state.index === 0){
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: this.state.index-=1,
      }, () => console.log(this.state.index))
    }
  }

  increaseIndex() {
    if (this.state.index === this.props.shoe.imageurl.length-1){
      this.setState({
        index: this.state.index
      })
    } else {
      this.setState({
        index: this.state.index+=1,
      }, () => console.log(this.state.index))
    }
  }

  render() {
  if (this.props.shoe.imageurl === undefined) {
    return (
      <div> loading </div>
    )
  } else {
    return (
      <div>
        <img onClick={this.decreaseIndex} className={style.carouselBackButton} src="svgleftarrow.svg"/>
        <img src={this.props.shoe.imageurl[this.state.index]} height="60%" width="72%" className={style.shoeImage}/>
        <img onClick={this.increaseIndex} className={style.carouselForwardButton} src="svgleftarrow.svg" />
        <div className={style.shoePrice} >${this.props.shoe.price}</div>
      </div>
    )
  }
}
}

export default Shoe;


