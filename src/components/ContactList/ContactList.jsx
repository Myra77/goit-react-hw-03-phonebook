import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { Contact } from 'components/Contact/Contact';

export const ContactList = ({ contacts, onDelete, filter }) => {
    if (filter.length) {
        contacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
    return (
        <ul className={css.contactList}>
            {contacts.map(contact => (
                <li key={contact.id} className={css.contactListItem}>
                    <Contact 
                    contact={contact} 
                    onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        })
    ).isRequired,
    filter: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};