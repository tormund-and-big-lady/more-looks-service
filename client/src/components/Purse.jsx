import React from 'react';
import style from './purse.css'


class Purse extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      index: 0
    }
    this.increaseIndex = this.increaseIndex.bind(this);
    this.decreaseIndex = this.decreaseIndex.bind(this);
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
    if (this.state.index === this.props.purse.imageurl.length-1){
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
    if (this.props.purse.imageurl === undefined) {
      return (
        <div> loading </div>
      )
    } else {
       return (
        <div>
          <div className={style.carouselWrapper}>
            <div className={style.backButton}>
              <img onClick={this.decreaseIndex} className={style.carouselBackButton} src="svgleftarrow.svg"/>
            </div>

            <div className={style.dressDiv} >
              <img src={this.props.purse.imageurl[this.state.index]} height="60%" width="60%" className={style.purseImage}/>
            </div>

            <div className={style.forwardButton}>
              <img onClick={this.increaseIndex} className={style.carouselForwardButton} src="svgleftarrow.svg" />
            </div>

          <div className={style.pursePrice}>${this.props.purse.price}</div>
          </div>
        </div>
      )
    }
  }
}

export default Purse;
