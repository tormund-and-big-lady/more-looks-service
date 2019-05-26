import React from 'react';
import style from './Dress.css';

class Dress extends React.Component {
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
    if (this.state.index === 0) {
      this.setState({
        index: 0,
      })
    } else {
      this.setState({
        index: this.state.index -= 1,
      })
    }
  }

  increaseIndex() {
    if (this.state.index === this.props.dress.imageurl.length - 1) {
      this.setState({
        index: this.state.index
      })
    } else {
      this.setState({
        index: this.state.index += 1,
      })
    }
  }

  showArrows() {
    this.setState({
      backButton: true,
      forwardButton: true,
    })
  }

  hideArrows() {
    this.setState({
      backButton: '',
      forwardButton: '',
    })
  }

  render() {
    if (this.props.dress.imageurl === undefined) {
      return (
        <div> loading </div>
      )
    } else {
      return (
        <div>
            <div className={style.carouselWrapper} onMouseOver={() => this.showArrows()} onMouseOut={() => this.hideArrows()}>
              <div className={style.backButton + this.state.backButton}>
                <img onClick={this.decreaseIndex} className={style.carouselBackButton} src="svgleftarrow.svg" onMouseOut={() => this.hideArrows()} />
              </div>
              <div className={style.dressImageContainer}>
                <img onClick={this.showModal} onMouseOver={() => this.showArrows()} src={this.props.dress.imageurl[this.state.index]} className={style.dressImage} height="200%" width="150%" />
              </div>
              <div className={style.forwardButton + this.state.forwardButton} >
                <img onClick={this.increaseIndex} className={style.carouselForwardButton} src="svgleftarrow.svg" onMouseOut={() => this.hideArrows()} />
              </div>
            </div>
            <div className={style.dressPrice}> ${this.props.dress.price} </div>
        </div>
      )
    }
  }
}

export default Dress;
