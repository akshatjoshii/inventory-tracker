import React from 'react';
import classes from './Modal.module.css';
const Modal = (props) => {
    return props.onOpen ?
     (
        <React.Fragment>
            <div className={classes.backdrop}></div>
            <div className={classes.modal}>
                <div className={classes['modal-close']}>
                    <span onClick={()=>props.onClose()}>&#10005;</span>
                </div>
                {props.children}
            </div>
        </React.Fragment>
    ): ''
}
export default Modal;