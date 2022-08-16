import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../UI/store/auth-context';
import classes from './LogoutButton.module.css';

const LogoutButton = () => {
    const authCtx = useContext(AuthContext);
    const history = useNavigate();
    const logoutHandler = () => {
        authCtx.logout();
        history('/home')
    }
    

    return <button className={classes.button} onClick={logoutHandler} >
        <span>Logout</span>
    </button>
}

export default LogoutButton;