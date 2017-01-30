import React from 'react';
import { Link } from 'react-router';
// import styles from './MobileDownloadView.scss';

export default function MobileDownloadView() {
  return (
    <div className="container text-xs-center">
      <h1>Page Not Found (404)</h1>
      <Link to="/">Back To Home</Link>
    </div>
  );
}
