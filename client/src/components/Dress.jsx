import React from 'react';
import style from './Dress.css';

class Dress extends React.Component {
  constructor(props){
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
    if (this.state.index === this.props.dress.imageurl.length-1){
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
    if (this.props.dress.imageurl === undefined) {
      return (
        <div> loading </div>
      )
    } else {
      return (
        <div>
          <div className={style.carouselWrapper}>
            <div className={style.backButton} >
              <img onClick={this.decreaseIndex} className={style.carouselBackButton} src="svgleftarrow.svg"/>
            </div>
            <div className={style.dressImageContainer}>
              <img src={this.props.dress.imageurl[this.state.index]} className={style.dressImage}/>
            </div>
            <div className={style.forwardButton} >
              <img onClick={this.increaseIndex} className={style.carouselForwardButton} src="svgleftarrow.svg" />
            </div>
          </div>
          <div className={style.dressPrice}> ${this.props.dress.price} </div>
        </div>
      )
    }
  }
}

export default Dress;
