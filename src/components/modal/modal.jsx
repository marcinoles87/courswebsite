import React, { useEffect, useRef } from "react";
import { ReactDOM } from "react-dom";

const Modal = ({children , handleOnClose ,isOpen , shouldBeClosedOnOutsideClick}) => {

    const modalRef = useRef(null);
    const previuseActiveElement = useRef(null);

    useEffect(() => {
        if(!modalRef.current){
            return;
        }

        const {current:modal} = modalRef;

        if(isOpen) {
            previuseActiveElement.current = document.activeElement;
            modal.showModal();

        }else if (previuseActiveElement.current) {
            modal.close();
            previuseActiveElement.current.focus();
        }
    } , [isOpen]);

    useEffect( ()=>{

        const {current: modal} = modalRef;

        const handleCancel = event => {
            event.preventDefault();
            handleOnClose();
        };
        modal.addEventListener('cancel', handleCancel);

        return() => {
            modal.removeEventListener('cancel',handleCancel)
        }
    },[handleOnClose]);

    const handleOutsideClick = ({ target}) => {
        const {current} = modalRef;



        if(shouldBeClosedOnOutsideClick && target === current) {
            handleOnClose();
        }

    }
    
    return ReactDOM.creactePortal((
        <dialog className="portal" ref={modalRef} onClick={handleOutsideClick}>
            {children}
        </dialog>
    ), document.body)
};

export default Modal;