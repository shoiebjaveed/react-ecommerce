import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import LoginButton from './LoginButton';

const Header = props => {

    return <Fragment>
        <header className={classes.header}>
            <nav className={classes.navbar}>
            <Link to='/login'><LoginButton/></Link>
            <Link to='/home'>Home</Link>
            <Link to='/'>Store</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>contact</Link>
            <HeaderCartButton onClick={props.onShowCart} />
            </nav>
        </header>
        <div className={classes.title}>
            <h1>The Generics</h1>
        </div>
    </Fragment>
}

export default Header;