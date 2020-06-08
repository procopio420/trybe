import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = props => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState('a');

  const content = [
    { id: 1, item: 'a' },
    { id: 2, item: 'b' },
    { id: 3, item: 'c' },
    { id: 4, item: 'd' },
  ];

  return (
    <div>
      <h1>{props.children.title}</h1>
      <div onClick={() => setShowDropdown(!showDropdown)}>
        <p>{selectedItem}</p>
      </div>
      {showDropdown && (
        <ul>
          {content.map(c => (
            <li
              onClick={() => {
                setSelectedItem(c.item);
              }}
              key={c.id}
            >
              {c.item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
Dropdown.propTypes = {
  children: PropTypes.shape({
    title: PropTypes.string,
  }),
};
export default Dropdown;
