import React, { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {

    return <Fragment>
        <header className={classes.header}>
            <nav className={classes.navbar}>
            <a href='#home'>Home</a>
            <a href='#store'>Store</a>
            <a href='#about'>About</a>
            <HeaderCartButton onClick={props.onShowCart} />
            </nav>
        </header>
        <div className={classes.title}>
            <h1>The Generics</h1>
        </div>
    </Fragment>
}

export default Header;