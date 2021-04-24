import React from 'react';
import classes from './List.module.css';
import Item from '../Item/Item';
const List = (props) => {
    const itemsList = props.items;
    const Items = itemsList.map((item, index) => {
        return (
            <Item item={item} key={index} index={index} onDelete={props.onDelete}></Item>
        )
    })
    return (
        <React.Fragment>
           {Items.length > 0 ?
            <div className={classes.list}>
                {Items}
            </div>
            :
            <div className={classes[`list-empty`]}>
                There is nothing in the list!
            </div>}


        </React.Fragment>
    )

}
export default List;
