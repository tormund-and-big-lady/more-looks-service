import React from 'react'
import Purse from './Purse.jsx';
import Earring from './Earring.jsx';
import Bracelet from './Bracelet.jsx';
import Shoe from './Shoe.jsx';
import Dress from './Dress.jsx';
import style from './List.css';

const List = (props) => {
  if (props.earring === undefined || props.shoe === undefined || props.purse === undefined) {
    return (
      <div>loading</div>
    )
  } else {
    return (
      <div>
        <div className={style.box}>
          <div className={style.modernOfficeWrapper}>
            <div className={style.modernOfficeDiv}>MODERN OFFICE LOOK</div>
            <a href="#" className={style.nodstromLink}>nordstrom</a>
            <hr className={style.line}></hr>
          </div>
          <div className={style.gridWrapper}>
          <div className={style.gridContainer}>
            <div className={style.column1}>
              <div className={style.earringItem}> <Earring earring={props.earring} /></div>
              <div className={style.braceletItem}><Bracelet bracelet={props.bracelet} /> </div>
            </div>
            <div clasName={style.column2}>
              <div className={style.dressItem}><Dress dress={props.dress} /></div>
            </div>
            <div className={style.column3}>
              <div className={style.purseItem}><Purse purse={props.purse} /></div>
              <div className={style.shoeItem}><Shoe shoe={props.shoe} /> </div>
            </div>
          </div>
          </div>
          <hr className={style.line}></hr>
        </div>
      </div>
    )
  }
}

export default List;

