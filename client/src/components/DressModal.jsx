import React from 'react';
import style from './DressModal.css';

class DressModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: '',
    }
    this.showSizes = this.showSizes.bind(this);
  }

  showSizes() {
    this.setState({
      sizes: true,
    })
  }


  render() {
    if (this.props.dress.imageurl === undefined) {
      return (
        <div>
          loading
        </div>
      )
    } else {
      return (
        <div>
          <div className={style[`componentContainer${this.props.modal}`]} >

            <div className={style.componentWrapper} >

              <div className={style.firstComponent}>
                <img className={style.image} src={this.props.dress.imageurl[0]} height="550px" max-width="550px" />
              </div>


              <div className={style.secondComponent}>
                {this.props.stars().map(rating => {
                  return <span>{rating}</span>
                })}

                <div className={style.productName}>
                  {this.props.dress.productname}
                </div>

                <div className={style.designer}>
                  {this.props.dress.designer}
                </div>

                <div className={style.price}>
                  ${this.props.dress.price}
                </div>

                <div className={style.description}>
                  {this.props.dress.description}
                </div>

                <div className={style.sizeContainer}>
                  <div className={style.sizeInput}>
                    <div onClick={this.showSizes} className={style.size} >
                      Size <img className={style.carrot} src="svgcarrot.svg"/>

                      <div className={style[`showSize${this.state.sizes}`]}>
                        
                      </div>

                    </div>
                  </div>
                </div>

                <div className={style.sizeGuide}> Size guides.</div>

                {/* <div className={style.colors}>
                </div> */}

                <div className={style.addBag}>
                  <button className={style.addToBag}>Add to bag</button>

                  <div className={style.detailsContainer}>
                    <a href="#" className={style.details}> See full details</a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )
    }
  }
}

export default DressModal;