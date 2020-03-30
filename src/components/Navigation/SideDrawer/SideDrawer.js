import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi';

const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.isOpen) {
        attachedClasses = ['SideDrawer', 'Open'];
    }
    return (
        <Aux>
            <Backdrop show={props.isOpen} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo height='11%' />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;