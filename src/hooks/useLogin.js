// firebase
import { signInWithEmailAndPassword } from "firebase/auth";

// auth
import { auth } from "../firebase/firebaseConfig";

// reducers
import { login } from "../app/userSlice";

// react-redux
import { useDispatch } from "react-redux";

// toast
import toast from "react-hot-toast";

// react
import { useState } from "react";

function useLogin() {
    let [isPending, setIsPending] = useState(false);
    let dispatch = useDispatch();

    let singInWithEmail = async ({ email, password }) => {
        setIsPending(true)
        try {
            let userCredential = await signInWithEmailAndPassword(auth, email, password)

            const user = userCredential.user;
            dispatch(login({ user }));
            setIsPending(false)
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            setIsPending(false)
        }
    }

    return { singInWithEmail, isPending }
}

export { useLogin }