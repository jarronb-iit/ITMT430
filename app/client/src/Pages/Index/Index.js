import React, { Component } from 'react';
import Styles from './Index.module.css';
import { NavLink } from 'react-router-dom';
import BaseStyles from '../../BaseStyles/Button.module.css';

export default class Index extends Component {
  render() {
    const BtnClasses = [BaseStyles.Button, BaseStyles.Blue];
    return (
      <div className="container">
        <header className={Styles.Title}>Roomie </header>
        <div className="row">
          {/* Card 1 */}
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className={Styles.cardTitle}>10 Sunset Drive</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className={Styles.cardTitle}>Listing 2</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className={Styles.cardTitle}>Listing 3</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className={Styles.cardTitle}>Listing 4</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
        <NavLink
          className={BtnClasses.join(' ')}
          to="/aboutme"
          value="/showAboutMe"
        >
          Continue
        </NavLink>
        <NavLink className={BtnClasses.join(' ')} to="/" value="return">
          Back
        </NavLink>
      </div>
    );
  }
}
