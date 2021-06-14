import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import './loader.css';
function Loader() {
  return (
    <div className="loader">
      <FontAwesomeIcon icon={faSyncAlt} className="loaderIcon" size="5x" />
    </div>
  );
}

export default Loader;
