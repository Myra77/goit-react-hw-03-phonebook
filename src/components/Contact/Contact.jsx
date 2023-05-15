import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const Contact = ({ contact: { id, name, number }, onDelete }) => {
    return (
        <ul>
            <li className={css['contact-wrapper']}>
                {name}: <span>{number}</span>
                <button className={css['delete-btn']} onClick={() => onDelete(id)}>Delete</button>
            </li> 
        </ul>        
    )
};

Contact.propTypes = {
    contact: PropTypes.shape ({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
    onDelete: PropTypes.func.isRequired,
};