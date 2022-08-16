import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../UI/store/auth-context';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Header = props => {
    const authCtx = useContext(AuthContext);
    const isloggedIn = authCtx.isLoggedIn;

    return <Fragment>
        <header className={classes.header}>
            <nav className={classes.navbar}>
                {!isloggedIn && <Link to='/login'><LoginButton/></Link>}
                {isloggedIn && <LogoutButton />}
            <Link to='/home'>Home</Link>
                {isloggedIn && <Link to='/store'>Store</Link>}
            <Link to='/about'>About</Link>
            <Link to='/contact'>contact</Link>
                 {isloggedIn && <HeaderCartButton onClick={props.onShowCart} />}
            </nav>
        </header>
        <div className={classes.title}>
            <h1>The Generics</h1>
        </div>
    </Fragment>
}

export default Header;