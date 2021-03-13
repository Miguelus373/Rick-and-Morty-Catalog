import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/filter.module.css';

const Filter = ({ name, handleChange }) => (
  <div className={styles.container}>
    <h4 className={styles.filter}>Add Filters:</h4>
    <input
      value={name}
      name="name"
      placeholder="Character Name"
      onChange={handleChange}
      className={styles.input}
    />
    <select
      defaultValue="status"
      name="status"
      onChange={handleChange}
      className={styles.select}
    >
      <option value="status" disabled>Status</option>
      <option value="">All</option>
      <option>Alive</option>
      <option>Dead</option>
      <option>Unknown</option>
    </select>
  </div>
);

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
