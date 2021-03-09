import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ name, handleChange }) => (
  <header>
    <div>
      <input
        value={name}
        name="name"
        placeholder="Enter Character Name"
        onChange={handleChange}
      />
      <select name="status" onChange={handleChange}>
        <option disabled>Status</option>
        <option>Alive</option>
        <option>Dead</option>
        <option>Unknown</option>
      </select>
    </div>
  </header>
);

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
