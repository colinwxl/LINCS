import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default function PublicationCategory(props) {
  const camelize = (str) => (
    str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    })
  );

  const { redirect, categoryName, className } = props;
  const passState = {};
  const camelizedCat = camelize(categoryName);
  passState[camelizedCat] = true;
  if (redirect) {
    return (
      <Link
        to={{ pathname: '/publications', state: passState }}
        className={className}
      >
        {categoryName}
      </Link>
    );
  }
  const { onClick } = props;
  return (
    <span
      onClick={() => onClick()}
      className={className}
    >
      {categoryName}
    </span>
  );
}

PublicationCategory.propTypes = {
  redirect: PropTypes.bool,
  to: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
  categoryName: PropTypes.string,
};
