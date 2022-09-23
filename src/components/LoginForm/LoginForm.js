import React, { useContext, useState } from "react";
import request from "../../helper/request";
import { StoreContext } from "../../store/StoreProvider";

import Modal from '../modal/modal'

// import './components/LoginForm/LoginFormStyle' ;

const LoginForm = (handleOnClose , isModalOpen) => {

    const [login , setLogin ] = useState('');
    const [password , setPassword ] = useState('');
    const [validateMessage , setValidateMessage ] = useState('');

    const { setUser } = useContext(StoreContext);

    const handleOnChangeLogin = ({target}) => setLogin(target.value);
    const handleOnChangePassword = ({target}) => setPassword(target.value);
    const handleOnCloseModal = event => {
        event.preventDefault();
        handleOnClose();

    }

    const resetStateOfInputs = () =>{
        setLogin('');
        setPassword('');
        setValidateMessage('');
    }

    const handleOnSubmit = async event => {
        event.preventDefault();
        const {data , status } = await request.post(
            '/users',
            {login,password});

            if(status===200) {
                setUser(data.user);
                resetStateOfInputs();
                handleOnCloseModal();

            }else {
                setValidateMessage(data.message);
            }
    }

    const validateMessageComponent = validateMessage.length
    ? <p className="message">{validateMessage}</p> 
    : null;

    return(
        <Modal handleOnClose={handleOnClose} isOpen={isModalOpen} shouldBeClosedOnOutsideClick={true} >
            {validateMessageComponent}
            <form className="login" method="post" onSubmit={handleOnSubmit}>
                <div className="row">
                    <label>
                        Login:
                        <input onChange={handleOnChangeLogin} type="text" value={login} />
                    </label>
                </div>

                <div className="row">
                    <label>
                        Haslo:
                        <input onChange={handleOnChangePassword} type="password" value={password} />
                    </label>
                </div>

                <div className="row">
                    <label>
                        <button  type="submit">Zaloguj</button>
                        <button onClick={handleOnCloseModal} type="button">Anuluj</button>
                    </label>
                </div>
                
            </form>
        </Modal>
    )
};

export default LoginForm;