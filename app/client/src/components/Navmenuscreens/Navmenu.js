import React, { Component } from 'react';
import Styles from '../SignUpForm/SignUpForm.module.css';
import BaseStyles from '../../BaseStyles/Input.module.css';
import { NavLink } from 'react-router-dom';
import MenuFace from './Navmenu.module.css';

export default function NavMenu (props) {
  const inputStyles = [BaseStyles.Input, Styles.Input, 'browser-default'];
  const signUpBtnClasses = [BaseStyles.Button, Styles.SignUpBtn];
  return ( <div className={MenuFace.UserMenustardard}>
    <NavLink to='#'className={MenuFace.Links} >Home</NavLink>
    <hr className={MenuFace.LineSpacingTop}></hr>
    <NavLink to='#'className={MenuFace.Links} >Messages</NavLink>
    <hr className={MenuFace.LineSpacing}></hr>
    <NavLink to='#'className={MenuFace.Links} >Favorites</NavLink>
    <hr className={MenuFace.LineSpacing}></hr>
    <NavLink to='#'className={MenuFace.Links} >Profile</NavLink>
    <hr className={MenuFace.LineSpacingTop}></hr>
    <NavLink to='#'className={MenuFace.Links} >Become A Seller</NavLink>
    <hr className={MenuFace.LineSpacing}></hr>
    <NavLink to='#'className={MenuFace.Links} >Settings</NavLink>
    <hr className={MenuFace.LineSpacingTop}></hr>
    <NavLink to='#' className={MenuFace.LogOutText}>Sign Out </NavLink>
    </div>
  );
}
