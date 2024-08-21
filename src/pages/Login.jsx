import { useRef } from 'react'
import { Form, Link } from 'react-router-dom'
import "./Login.css"

function Login() {

    let loginEmail = useRef();
    let loginPassword = useRef();

    let handleSubmit = (e) => {
        e.preventDefault();

        let email = loginEmail.current.value;
        let password = loginPassword.current.value;

        console.log({
            email,
            password
        });
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <form className="form h-[400px] w-[320px]">
                <div className="form-title"><span>sign in to your</span></div>
                <div className="title-2"><span>SPACE</span></div>
                <div className="input-container">
                    <input placeholder="Email" type="email" className="input-mail" />
                    <span> </span>
                </div>

                <section className="bg-stars">
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                </section>

                <div className="input-container">
                    <input placeholder="Password" type="password" className="input-pwd" />
                </div>
                <button className="submit mt-10 inline-block" type="submit">
                    <span className="sign-text">Sign in</span>
                </button>

                <p className="signup-link mt-3">
                    No account?
                    <Link className="up ml-3" to="/register">Sign up!</Link>
                </p>
            </form>
        </div>
    )
}

export default Login