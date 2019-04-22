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
            <div className={Styles.fullCard}>  {/* This is for hover purpose */}
            <div className="card white darken-1">
              <div className="card-content cyan-text">
              <div className={Styles.cardPhoto}>
              </div>
              </div>
                <span className={Styles.cardTitle}>10 Sunset Drive</span>
                <div>
                <span className={Styles.cardAddress}>10 Sunset Drive, Malibu, CA</span>
                <span className={Styles.cardPrice}> $2,000 </span>
                </div>
              <div className="card-action">
                <span className={Styles.cardBedBath}>3 Bed 3 Bath</span>
                <span className={Styles.cardSqft}>2300 Sqft</span>
              </div>
            </div>
          </div>
          </div>

          {/* Card 2 */}
          <div className="col s12 m6">
            <div className={Styles.fullCard}>
            <div className="card white darken-1">
              <div className="card-content cyan-text">
              <div className={Styles.cardPhoto}>
              </div>
              </div>
                <span className={Styles.cardTitle}>10 Sunset Drive</span>
                <div>
                <span className={Styles.cardAddress}>10 Sunset Drive, Malibu, CA</span>
                <span className={Styles.cardPrice}> $2,000 </span>
                </div>
              <div className="card-action">
                <span className={Styles.cardBedBath}>3 Bed 3 Bath</span>
                <span className={Styles.cardSqft}>2300 Sqft</span>
              </div>
            </div>
          </div>
          </div>

          {/* Card 3 */}
          <div className="col s12 m6">
            <div className={Styles.fullCard}>
            <div className="card white darken-1">
              <div className="card-content cyan-text">
              <div className={Styles.cardPhoto}>
              </div>
              </div>
                <span className={Styles.cardTitle}>10 Sunset Drive</span>
                <div>
                <span className={Styles.cardAddress}>10 Sunset Drive, Malibu, CA</span>
                <span className={Styles.cardPrice}> $2,000 </span>
                </div>
              <div className="card-action">
                <span className={Styles.cardBedBath}>3 Bed 3 Bath</span>
                <span className={Styles.cardSqft}>2300 Sqft</span>
              </div>
            </div>
          </div>
          </div>

          {/* Card 4 */}
          <div className="col s12 m6">
            <div className={Styles.fullCard}>
            <div className="card white darken-1">
              <div className="card-content cyan-text">
              <div className={Styles.cardPhoto}>
              </div>
              </div>
                <span className={Styles.cardTitle}>10 Sunset Drive</span>
                <div>
                <span className={Styles.cardAddress}>10 Sunset Drive, Malibu, CA</span>
                <span className={Styles.cardPrice}> $2,000 </span>
                </div>
              <div className="card-action">
                <span className={Styles.cardBedBath}>3 Bed 3 Bath</span>
                <span className={Styles.cardSqft}>2300 Sqft</span>
              </div>
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
