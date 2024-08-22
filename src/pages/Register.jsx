import { useRef } from "react";
import "./Register.css";

import { useRegister } from '../hooks/useRegister'
import { useLogin } from "../hooks/useLogin"

function Register() {
    // hooks
    let loginEmail = useRef();
    let loginPassword = useRef();
    let registerEmail = useRef();
    let registerPassword = useRef();
    let registerName = useRef();

    let { registerWithEmail, isPending: RegisterPending } = useRegister();
    let { singInWithEmail, isPending: LoginPending } = useLogin()

    // functions
    let handleLogin = (e) => {
        e.preventDefault();

        singInWithEmail({
            email: loginEmail.current.value,
            password: loginPassword.current.value,
        });
    }

    let handleRegister = (e) => {
        e.preventDefault()

        registerWithEmail({
            email: registerEmail.current.value,
            password: registerPassword.current.value,
            displayName: registerName.current.value,
        });
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="wrapper">
                <div className="card-switch">
                    <label className="switch">
                        <input className="toggle" type="checkbox" />
                        <span className="slider"></span>
                        <span className="card-side"></span>
                        <div className="flip-card__inner">
                            <div className="flip-card__front">
                                <div className="title">Log in</div>
                                <form onSubmit={handleLogin} action="" className="flip-card__form">
                                    <input ref={loginEmail} type="email" placeholder="Email" name="email" className="flip-card__input" />
                                    <input ref={loginPassword} type="password" placeholder="Password" name="password" className="flip-card__input" />

                                    {!LoginPending
                                        ?
                                        <button className="flip-card__btn">Let`s go!</button>
                                        :
                                        <button className="btn-disabled flip-card__btn opacity-30">
                                            <span className="loading loading-spinner loading-md"></span>
                                        </button>
                                    }
                                </form>
                            </div>
                            <div className="flip-card__back">
                                <div className="title">Sign up</div>
                                <form onSubmit={handleRegister} action="" className="flip-card__form">
                                    <input ref={registerName} type="name" placeholder="Name" className="flip-card__input" />
                                    <input ref={registerEmail} type="email" placeholder="Email" name="email" className="flip-card__input" />
                                    <input ref={registerPassword} type="password" placeholder="Password" name="password" className="flip-card__input" />
                                    {!RegisterPending
                                        ?
                                        <button className="flip-card__btn">
                                            Confirm!
                                        </button>
                                        :
                                        <button className="btn-disabled flip-card__btn opacity-30">
                                            <span className="loading loading-spinner loading-md"></span>
                                        </button>
                                    }
                                </form>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Register