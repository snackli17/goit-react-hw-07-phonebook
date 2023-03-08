import propTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, handleChange }) => {
  return (
    <div className={css.filterContainer}>
      <label className={css.labelFilter}>Find contacts by name</label>
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};


Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};


