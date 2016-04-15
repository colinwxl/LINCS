import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import styles from './Navigation.scss';
import { logoutAndRedirect } from 'actions/auth';

const mapStateToProps = (state) => ({ auth: state.auth });
export class Navigation extends Component {
  _handleLogOut = () => {
    this.props.logoutAndRedirect();
  };

  render() {
    const { auth: { isAuthenticated }, atHome } = this.props;
    const atHomeClass = atHome ? styles['main-nav-home'] : '';
    return (
      <header
        className={`navbar bg-faded ${styles['main-nav']} ${atHomeClass}`}
        role="banner"
      >
        <div className="container">
          <div className="clearfix">
            <button
              className="navbar-toggler pull-xs-right hidden-md-up"
              type="button"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              ☰
            </button>
            <Link className={`navbar-brand hidden-md-up ${styles.title}`} to="/">
              NIH LINCS Program
            </Link>
          </div>
          <div className="collapse navbar-toggleable-sm" id="main-navbar">
            <Link className={`navbar-brand hidden-sm-down ${styles.title}`} to="/">
              NIH LINCS Program
            </Link>
            <nav className="nav navbar-nav pull-md-right">
              <Link className={styles.link} to="/centers">
                Centers
              </Link>
              <Link className={styles.link} to="/data">
                Data
              </Link>
              <Link className={styles.link} to="/applications">
                Applications
              </Link>
              <Link className={styles.link} to="/community">
                Community
              </Link>
              <Link className={styles.link} to="/publications">
                Publications
              </Link>
              <Link className={styles.link} to="/news">
                News
              </Link>
              {
                isAuthenticated &&
                <a
                  className={`${styles.link} ${styles['logout-btn']}`}
                  onClick={this._handleLogOut}
                >
                  Logout
                </a>
              }
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

Navigation.propTypes = {
  atHome: PropTypes.bool,
  auth: PropTypes.object,
  logoutAndRedirect: PropTypes.func,
};

export default connect(mapStateToProps, {
  logoutAndRedirect,
})(Navigation);
