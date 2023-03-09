import css from "./ContactList.module.css";
import { useEffect } from 'react';
import { fetchContact, deleteContact } from '../../redux/contactsOperation';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const filterQuery = useSelector(state => state.filter.filter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterQuery.toLowerCase())
  );
    return (
        <div className={css.contactContainer}>
            <ul className={css.contactList}>
                {filteredContacts.map(contact => (
                  <li key={contact.id} className={css.contactsItem}>
                    {contact.name}: {contact.number}
                    <button className={css.deleteBtn} type="button" onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
                  </li>
                ))}
            </ul>
        </div>
    )
}
