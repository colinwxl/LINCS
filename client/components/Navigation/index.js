import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Navigation.scss';
import cubeImg from './cube_no-lines.png';


export default function Navigation(props) {
  const { atHome } = props;
  
  return (
    <header
      className={`navbar bg-faded ${styles['main-nav']}`}
      role="banner"
    >
      <div className="container">
        <div className={`clearfix hidden-md-up ${styles['nav-mobile']}`}>
          <button
            className={`navbar-toggler pull-xs-right ${styles.toggle}`}
            type="button"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            ☰
          </button>
          <Link className={`navbar-brand ${styles.title}`} to="/">
            NIH LINCS Program
          </Link>
        </div>
        <div className={`collapse navbar-toggleable-sm ${styles['dd-nav']}`} id="main-navbar">
          <Link to="/">
            <img src={cubeImg} alt="NIH LINCS Program" />
          </Link>
          <Link className={`navbar-brand hidden-sm-down ${styles.title}`} to="/">
            NIH LINCS Program
          </Link>
          <nav className="nav navbar-nav pull-md-right">
            <Link className={styles.link} to="/about">
              About
            </Link>
            <Link className={styles.link} to="/centers">
              Centers
            </Link>
            <Link className={styles.link} to="/data">
              Data
            </Link>
            <Link className={styles.link} to="/applications">
              Tools
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
          </nav>
        </div>
      </div>
    </header>
  );
}

Navigation.propTypes = {
  atHome: PropTypes.bool,
};
