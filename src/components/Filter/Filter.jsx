import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onFilter }) => {
    return(
        <div className={css.filter}>
            <p className={css['filter-text']}>Find contacts by name</p>
            <input className={css.input}
                type="text"
                name="filter"
                onInput={e => onFilter(e.target.value)}
            ></input>
        </div>
    );
};

Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
};