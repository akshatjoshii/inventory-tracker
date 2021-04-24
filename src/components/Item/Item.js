import React from 'react';
import classes from './Item.module.css';

const Item = (props) => {
    const {name, price, description} = props.item;
    return (
        <div className={classes.item} onClick={(e) => {props.onDelete(e, props.index)}}>
            <div className={classes.name}>
                {name}
            </div>
            <div className={classes.price}>
                ${price}
            </div>
            <div className={classes.description}>
                {description}
            </div>
        </div>
    )
}
export default Item;
