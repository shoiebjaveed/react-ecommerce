import Card from "../components/UI/Card";
import classes from './Login.module.css';

const Login = () => {

    return(
        <Card className={classes.card}>
            <h1>Login.</h1>
            <section className={classes.form}>
        <form>
        <div className={classes.control}>
          <label htmlFor='opening-text'>Email</label>
          <input type='email' id='email' />
        </div>
        <div className={classes.control}>
          <label htmlFor='date'>password</label>
          <input type='password' id='password' />
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