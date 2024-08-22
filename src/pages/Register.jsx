import { useRef, useState } from "react";
import "./Register.css";

import { useRegister } from '../hooks/useRegister'
import { useLogin } from "../hooks/useLogin"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../app/userSlice";

function Register() {
    let dispatch = useDispatch()

    // hooks
    let [errors, setErrors] = useState({
        loginEmail: false,
        loginPassword: false,
        registerEmail: false,
        registerPassword: false,
        registerName: false,
    });

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

        let hasError = false;

        // Errorlarni aniqlash
        if (!loginEmail.current.value.trim()) {
            setErrors(prevErrors => ({ ...prevErrors, loginEmail: true }));
            hasError = true;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, loginEmail: false }));
        }

        if (!loginPassword.current.value.trim()) {
            setErrors(prevErrors => ({ ...prevErrors, loginPassword: true }));
            hasError = true;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, loginPassword: false }));
        }

        // Agar hech qanday xatolik bo'lmasa, funksiyani bajarish
        if (!hasError) {
            singInWithEmail({
                email: loginEmail.current.value,
                password: loginPassword.current.value,
            });
        } else {
            toast.error(`Please enter all of them`);
        }
    }

    let handleRegister = (e) => {
        e.preventDefault();

        let hasError = false;

        // Errorlarni aniqlash
        if (!registerEmail.current.value.trim()) {
            setErrors(prevErrors => ({ ...prevErrors, registerEmail: true }));
            hasError = true;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, registerEmail: false }));
        }

        if (!registerPassword.current.value.trim()) {
            setErrors(prevErrors => ({ ...prevErrors, registerPassword: true }));
            hasError = true;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, registerPassword: false }));
        }

        if (!registerName.current.value.trim()) {
            setErrors(prevErrors => ({ ...prevErrors, registerName: true }));
            hasError = true;
        } else {
            setErrors(prevErrors => ({ ...prevErrors, registerName: false }));
        }

        // Agar hech qanday xatolik bo'lmasa, funksiyani bajarish
        if (!hasError) {
            registerWithEmail({
                email: registerEmail.current.value,
                password: registerPassword.current.value,
                displayName: registerName.current.value,
            });
        } else {
            toast.error(`Please enter all of them`);
        }
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
                                    <input ref={loginEmail} type="email" placeholder="Email" name="email" className={`flip-card__input ${errors.loginEmail ? `border-red-600` : ``}`} />
                                    <input ref={loginPassword} type="password" placeholder="Password" name="password" className={`flip-card__input ${errors.loginPassword ? `border-red-600` : ``}`} />

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
                                    <input ref={registerName} type="name" placeholder="Name" className={`flip-card__input ${errors.registerName ? `border-red-600` : ``}`} />
                                    <input ref={registerEmail} type="email" placeholder="Email" name="email" className={`flip-card__input ${errors.registerEmail ? `border-red-600` : ``}`} />
                                    <input ref={registerPassword} type="password" placeholder="Password" name="password" className={`flip-card__input ${errors.registerPassword ? `border-red-600` : ``}`} />
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