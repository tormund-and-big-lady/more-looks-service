import React from 'react'
import Purse from './Purse.jsx';
import Earring from './Earring.jsx';
import Bracelet from './Bracelet.jsx';
import Shoe from './Shoe.jsx';
import Dress from './Dress.jsx';
import DressModal from './DressModal.jsx';
import BraceletModal from './BraceletModal.jsx';
import EarringModal from './EarringModal.jsx';
import PurseModal from './PurseModal.jsx';
import ShoeModal from './ShoeModal.jsx';
import style from './List.css';



class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      earringmodal: false,
      braceletmodal: false,
      dressmodal: false,
      pursemodal: false,
      shoemodal: false,
    }
    this.showEarringModal = this.showEarringModal.bind(this);
    this.showBraceletModal = this.showBraceletModal.bind(this);
    this.showDressModal = this.showDressModal.bind(this);
    this.showPurseModal = this.showPurseModal.bind(this);
    this.showShoeModal = this.showShoeModal.bind(this);
    this.stars = this.stars.bind(this);
  }

  stars() {
    let arr = [
      [
        <img className={style.star} src="svgstarnoshade.svg" />,
        <img className={style.star} src="svgstarnoshade.svg" />,
        <img className={style.star} src="svgstarnoshade.svg" />,
        <img className={style.star} src="svgstarnoshade.svg" />,
        <img className={style.star} src="svgstarnoshade.svg" />,
      ],
      [
        <img className={style.star} src="svgexportstar.svg" />,
        <img className={style.star} src="svgexportstar.svg" />,
        <img className={style.star} src="svgexportstar.svg" />,
        <img className={style.star} src="svgstarnoshade.svg" />,
        <img className={style.star} src="svgstarnoshade.svg" />,
      ],
      [
        <img className={style.star} src="svgexportstar.svg" />,
        <img className={style.star} src="svgexportstar.svg" />,
        <img className={style.star} src="svgexportstar.svg" />,
        <img className={style.star} src="svgexportstar.svg" />,
        <img className={style.star} src="svgstarnoshade.svg" />,
      ]
    ]

    let randomindex = Math.floor(Math.random() * 3)

    return arr[randomindex]
  }

  showEarringModal() {
    this.setState({
      earringmodal: true,
      braceletmodal: false,
      dressmodal: false,
      pursemodal: false,
      shoemodal: false,
    })
  }

  showBraceletModal() {
    this.setState({
      earringmodal: false,
      braceletmodal: true,
      dressmodal: false,
      pursemodal: false,
      shoemodal: false,
    })
  }

  showDressModal() {
    this.setState({
      earringmodal: false,
      braceletmodal: false,
      dressmodal: true,
      pursemodal: false,
      shoemodal: false,
    })
  }

  showPurseModal() {
    this.setState({
      earringmodal: false,
      braceletmodal: false,
      dressmodal: false,
      pursemodal: true,
      shoemodal: false,
    })
  }

  showShoeModal() {
    this.setState({
      earringmodal: false,
      braceletmodal: false,
      dressmodal: false,
      pursemodal: false,
      shoemodal: true,
    })
  }

  render() {
    if (this.props.earring === undefined || this.props.shoe === undefined || this.props.purse === undefined) {
      return (
        <div>loading</div>
      )
    } else {
      return (
        <div>
          <div className={style.componentContainer}>
            <div className={style.firstComponent}>
              <div className={style.box}>
                <div className={style.modernOfficeWrapper}>
                  <div className={style.modernOfficeDiv}>MODERN OFFICE LOOK</div>
                  <a href="#" className={style.nodstromLink}>nordstrom</a>
                  <hr className={style.line}></hr>
                </div>
                <div className={style.gridWrapper}>
                  <div className={style.gridContainer}>
                    <div className={style.column1}>
                      <div onClick={this.showEarringModal} className={style.earringItem}> <Earring earring={this.props.earring}/></div>
                      <div onClick={this.showBraceletModal} className={style.braceletItem}><Bracelet bracelet={this.props.bracelet}/> </div>
                    </div>
                    <div className={style.column2}>
                      <div onClick={this.showDressModal} className={style.dressItem}><Dress dress={this.props.dress}/></div>
                    </div>
                    <div className={style.column3}>
                      <div onClick={this.showPurseModal} className={style.purseItem}><Purse purse={this.props.purse} /></div>
                      <div onClick={this.showShoeModal} className={style.shoeItem}><Shoe shoe={this.props.shoe}/> </div>
                    </div>
                  </div>
                </div>
                <hr className={style.line}></hr>
                <img src="svgheart.svg" className={style.svgHeart} />
                <img src='svgexport.svg' />
                <span className={style.randomLikes}> {this.props.randomLikes()} love this look</span>
                <div className={style.designerName}> From {this.props.earring.designer}, {this.props.shoe.designer}, {this.props.dress.designer}, {this.props.purse.designer}, and {this.props.bracelet.designer}</div>
                <div>

                </div>
              </div>
            </div>

            <div className={style.secondComponent}>
                <DressModal dress={this.props.dress} modal={this.state.dressmodal} stars={this.stars}/>
                <BraceletModal bracelet={this.props.bracelet} modal={this.state.braceletmodal}/>
                <EarringModal earring={this.props.earring} modal={this.state.earringmodal}/>
                <PurseModal purse={this.props.purse} modal={this.state.pursemodal} />
                <ShoeModal shoe={this.props.shoe} modal={this.state.shoemodal} stars={this.stars} />
            </div>

          </div>
        </div>
      )
    }
  }
}

export default List;

