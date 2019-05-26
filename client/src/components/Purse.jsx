import React from 'react';
import style from './purse.css'


class Purse extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      index: 0,
      backButton: '',
      forwardButton: '',
      modal: '',
    }
    this.increaseIndex = this.increaseIndex.bind(this);
    this.decreaseIndex = this.decreaseIndex.bind(this);
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
      })
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

  // showModal() {
  //   this.setState({
  //     modal: true
  //   })
  // }

  render() {
    if (this.props.purse.imageurl === undefined) {
      return (
        <div> loading </div>
      )
    } else {
      return (
        <div>
          <div className={style.carouselWrapper} onMouseOver={() => this.showArrows()} onMouseOut={() => this.hideArrows()} >
            <div className={style.backButton + this.state.backButton}>
              <img onMouseOver={() => this.showArrows()} onClick={this.decreaseIndex} className={style.carouselBackButton} src="svgleftarrow.svg" onMouseOut={() => this.hideArrows()}/>
            </div>

            <div className={style.dressDiv} >
              <img onClick={this.showModal} src={this.props.purse.imageurl[this.state.index]} height="60%" width="60%" className={style.purseImage}/>
            </div>

            <div className={style.forwardButton + this.state.forwardButton}>
              <img onMouseOver={() => this.showArrows()}  onClick={this.increaseIndex} className={style.carouselForwardButton} src="svgleftarrow.svg" onMouseOut={() => this.hideArrows()} />
            </div>
          </div>

          <div className={style.pursePrice} >
            <div className={style.pursePrice}>${this.props.purse.price}</div>
          </div>
        </div>
      )
    }
  }
}

export default Purse;
