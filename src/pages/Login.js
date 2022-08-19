import { useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "../components/UI/Card";
import AuthContext from "../components/UI/store/auth-context";
import classes from './Login.module.css';

const Login = () => {
    const history = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    //const [isLogin, setIsLogin] = useState(true);
    const authCtx = useContext(AuthContext);


    const submitHandler = (event) => {

        event.preventDefault();
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDDQM5sBZ7fGP4vG64C5UwYmg6iWmuehL8';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if(res.ok){
                console.log('sucess..');
                return res.json();
            } else {
                alert('Incorrect Password')
            }
        }).then((data) => {
            console.log(data)
            authCtx.login(data.idToken);
            history('/store');
        }).catch((err) => alert(err.message))
    }

    return(
        <Card className={classes.card}>
            <h1>Login.</h1>
            <section className={classes.form}>
        <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='opening-text'>Email</label>
          <input type='email' id='email' required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='date'>password</label>
          <input type='password' id='password' required ref={passwordRef} />
        </div>
        <div className={classes.control}>
        <button>Login</button>
        </div>
      </form>
      </section>
      </ Card>
    )
}

export default Login;
