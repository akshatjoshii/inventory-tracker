import React, {useState} from "react";
import classes from "./AddItem.module.css";


const AddItem = (props) => {
    const [item, setItem] = useState({
        name: '',
        price: '',
        description: ''
    });
    const onSubmitItem = (e) => {
        e.preventDefault()
        if(!item.name.trim() || !item.price.trim() || !item.description.trim()) {
            return false;
        }
        props.onAddItem(item);
    }
    const onNameChange = (e) => {
        setItem((prevState) => {
            return {
                ...prevState,
                name: e.target.value
            }
        })
    }

    const onPriceChange = (e) => {
        setItem((prevState) => {
            return {
                ...prevState,
                price: e.target.value
            }
        })
    }
    const onDescriptionChange = (e) => {
        setItem((prevState) => {
            return {
                ...prevState,
                description: e.target.value
            }
        })
    }
    return (
        <React.Fragment>
            <form className={classes['add-item-form']} onSubmit={onSubmitItem}>
                <div>
                    <label htmlFor="name">Item Name</label>
                    <input id="name" type="text" onChange={onNameChange} className={'form-input'}/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input id="price" onChange={onPriceChange} type="number" className={'form-input'}/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" onChange={onDescriptionChange} className={'form-textarea'}></textarea>
                </div>
                <div>
                    <button className="button -regular">Add Item</button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default AddItem;
