import css from "./Filter.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { nanoid } from "nanoid";

export const Filter = () => {
    const dispatch = useDispatch();

  const filter = useSelector(state => state.filter.filter);
  const idFilter = nanoid();

    return (
      <div className={css.filterContainer}>
        <label className={css.labelFilter} htmlFor={idFilter}>
          Find contacts by name
        </label>
        <input
          className={css.inputFilter}
          id={idFilter}
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(filterContact(e.target.value))}
        />
      </div>
    );
};
