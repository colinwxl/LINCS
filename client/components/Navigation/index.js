import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Navigation.scss';
import cubeImg from './cube_no-lines.png';
import logoWithLines from './logoWithLines-min.png';
import fillerImg from './fillerImg.jpg';



export default function Navigation(props) {
  const { atHome } = props;
  if (atHome) {
    return (
      <header
        className={`navbar bg-faded ${styles['main-nav']} ${styles['landing-nav']}`}
        role="banner"
      >
        <div className={`${styles['navbar-top']}`}>
          <div className="container">
            <Link to="/">
              <img
                className={`${styles.logo}`}
                src={logoWithLines}
                alt="NIH LINCS Program"
              />
              <h2 className={`${styles.header} ${styles.title}`}>
                <span className={`${styles.nih}`}>NIH </span> LINCS
                <br />
                <span className={`${styles.program}`}>program</span>
              </h2>
              <h2 className={`${styles.header} ${styles['sub-title']}`}>
                The Library of Integrated Network-Based Cellular Signatures
              </h2>
            </Link>
          </div>



          <img className={`${styles.filler}`} src={fillerImg} alt="NIH LINCS Program" />
        </div>

        <div className={`${styles['navbar-mid']}`} style={{ backgroundColor: '#cc9' }}>
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
            </div>
            <div className={`collapse navbar-toggleable-sm ${styles['dd-nav']}`} id="main-navbar">
              <nav className="nav navbar-nav pull-md-left">
                <Link className={`${styles['tab-item']}`} to="/">
                  Home
                </Link>
                <Link className={`${styles['tab-item']}`} to="/about">
                  About
                </Link>
                <Link className={`${styles['tab-item']}`} to="/centers">
                  Centers
                </Link>
                <Link className={`${styles['tab-item']}`} to="/data">
                  Data
                </Link>
                <Link className={`${styles['tab-item']}`} to="/applications">
                  Tools
                </Link>
                <Link className={`${styles['tab-item']}`} to="/community">
                  Community
                </Link>
                <Link className={`${styles['tab-item']}`} to="/publications">
                  Publications
                </Link>
                <Link className={`${styles['tab-item']}`} to="/news">
                  News
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }

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
          <Link className={`navbar-brand ${styles.title} ${styles.link}`} to="/">
            NIH LINCS Program
          </Link>
        </div>
        <div className={`collapse navbar-toggleable-sm ${styles['dd-nav']}`} id="main-navbar">
          <Link to="/">
            <img className={styles.cubeImg} src={cubeImg} alt="NIH LINCS Program" />
          </Link>
          <Link className={`navbar-brand hidden-sm-down ${styles.title} ${styles.link}`} to="/">
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
