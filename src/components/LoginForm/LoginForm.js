import React, { useState } from "react";

import Modal from '../modal/modal'

import { default as LoginFormStyle } from './LoginFormStyle' ;

const LoginForm = (handleOnClose , isModalOpen) => {

    const [login , setLogin ] = useState('');
    const [password , setPassword ] = useState('');
    const [validateMessage , setValidateMessage ] = useState('');

    return(
        <Modal handleOnClose={handleOnClose} isOpen={} shouldBeClosedOnOutsideClick={true} >
            <form className="login" method="post" onSubmit={}>
                <div className="row">
                    <label>
                        <input type="text" />
                    </label>
                </div>

                <div className="row">
                    <label>
                        <input type="password" />
                    </label>
                </div>

                <div className="row">
                    <label>
                        <button type="submit"></button>
                        <button type="button"></button>
                    </label>
                </div>
                
            </form>
        </Modal>
    )
};

export default LoginForm;