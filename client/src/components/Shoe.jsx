import React from 'react';
import style from './shoe.css';


class Shoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      backButton: '',
      forwardButton: '',
    }
    this.decreaseIndex = this.decreaseIndex.bind(this);
    this.increaseIndex = this.increaseIndex.bind(this);
    this.showArrows = this.showArrows.bind(this);
    this.hideArrows = this.hideArrows.bind(this);
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

  showArrows() {
    this.setState({
      backButton: true,
      forwardButton: true,
    }, () => console.log('showing'))
  }

  hideArrows() {
    this.setState({
      backButton: '',
      forwardButton: '',
    }, () => console.log('hiding'))
  }

  render() {
  if (this.props.shoe.imageurl === undefined) {
    return (
      <div> loading </div>
    )
  } else {
    return (
      <div>
        <div className={style.carouselWrapper} onMouseOver={() => this.showArrows()} onMouseOut={() => this.hideArrows()} >

        <div className={style.backButton + this.state.backButton}>
          <img onMouseOver={() => this.showArrows()} onMouseOut={() => this.hideArrows()} onClick={this.decreaseIndex} className={style.carouselBackButton} src="svgleftarrow.svg"/>
        </div>

        <img src={this.props.shoe.imageurl[this.state.index]} height="60%" width="72%" className={style.shoeImage}/>

        <div className={style.forwardButton + this.state.forwardButton} >
          <img onMouseOver={() => this.showArrows()} onMouseOut={() => this.hideArrows()} onClick={this.increaseIndex} className={style.carouselForwardButton} src="svgleftarrow.svg" />
        </div>

        </div>
        <div className={style.shoePrice} >${this.props.shoe.price}</div>
      </div>
    )
  }
}
}

export default Shoe;


