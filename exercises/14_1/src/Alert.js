import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = props => {
  const { hideComponent } = props;
  const { title, content, timeSeconds } = props.children;
  setTimeout(() => hideComponent(), timeSeconds * 1000);

  return (
    <div className='Alert'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};
Alert.propTypes = {
  hideComponent: PropTypes.func,
  children: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    timeSeconds: PropTypes.number,
  }),
};
export default Alert;
