import React from 'react';
import style from './ShoeModal.css';

class ShoeModal extends React.Component {
  constructor(props) {
    super (props);
    this.state = {

    }
  }

  render() {
    if (this.props.shoe.imageurl === undefined) {
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
                <img className={style.image} src={this.props.shoe.imageurl[0]} height="400px" max-width="400px" />
              </div>


              <div className={style.secondComponent}>
                {this.props.stars().map(rating => {
                  return <span>{rating}</span>
                })}

                <div className={style.productName}>
                  {this.props.shoe.productname}
                </div>

                <div className={style.designer}>
                  {this.props.shoe.designer}
                </div>

                <div className={style.price}>
                  ${this.props.shoe.price}
                </div>

                <div className={style.description}>
                  {this.props.shoe.description}
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

export default ShoeModal;