import css from './ContactList.module.css';
import { removeContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filterQuery = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filterQuery.toLocaleLowerCase())
  );
  return (
    <div className={css.contactContainer}>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.contactsItem}>
            {contact.name}: {contact.number}
            <button
              className={css.deleteBtn}
              type="button"
              onClick={() => dispatch(removeContact(contact))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
