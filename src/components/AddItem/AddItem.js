import React, {useState, useRef} from "react";
import classes from "./AddItem.module.css";


const AddItem = (props) => {
    const nameRef = useRef(null);
    const priceRef = useRef(null);
    const descriptionRef = useRef(null);
    const onSubmitItem = (e) => {
        e.preventDefault()
        if(!nameRef.current.value.trim() || !priceRef.current.value.trim() || !descriptionRef.current.value.trim()) {
            return false;
        }
        props.onAddItem({
            name: nameRef.current.value.trim(),
            price: priceRef.current.value.trim(),
            description: descriptionRef.current.value.trim()
        });
    }
    return (
        <React.Fragment>
            <form className={classes['add-item-form']} onSubmit={onSubmitItem}>
                <div>
                    <label htmlFor="name">Item Name</label>
                    <input ref={nameRef} id="name" type="text" className={'form-input'}/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input ref={priceRef} id="price" type="number" className={'form-input'}/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea ref={descriptionRef} id="description" className={'form-textarea'}></textarea>
                </div>
                <div>
                    <button className="button -regular">Add Item</button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default AddItem;
