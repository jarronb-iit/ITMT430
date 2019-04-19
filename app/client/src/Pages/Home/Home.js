import React, { Component } from 'react';
import HomepageButtons from '../../components/HomePageButtons/HomePageButtons';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import AboutMeInfo from '../../components/TellMeAboutYou/TellMeAboutYou';
import LoginForm from '../../components/LoginForm/LoginForm';
import UserType from '../../components/UserType/UserType';
import Styles from './Home.module.css';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import Navmenu from '../../components/Navmenuscreens/Navmenu';
import NavMenuSellersScreen from '../../components/Navmenuscreens/NavMenuSellersScreen';

export default class Test extends Component {
  changePage(event) {
    console.log(event);
  }

  render() {
    let pageProps = {
      changePage: this.changePage
    };
    return (
      <BrowserRouter>
        <div>
          <Route path='/signup' exact component={SignUpForm} />
          <Route path='/aboutme' exact component={AboutMeInfo} />
          <Route path='/login' exact component={LoginForm} />
          <Route path='/' exact component={HomepageButtons} />
          <Route path='/userType' exact component={UserType} />
          <Route path='/NavMenu' exact component={Navmenu} />
          <Route path='/NavMenuSellersScreen' exact component={NavMenuSellersScreen} />
        </div>
      </BrowserRouter>
    );
  }
}
