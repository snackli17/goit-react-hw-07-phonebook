import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsOperation';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const idName = nanoid();
  const idNumber = nanoid();

  const handleFormSubmit = event => {
    event.preventDefault();

    const { name, value } = event.target.elements;
    const number = event.target.elements.number.value;
    const object = { [name.name]: value, [number.name]: number.value };

    const includesName = contacts.find(
      contact =>
        contact.name && contact.name.toLowerCase() === value.toLowerCase()
    );


    if (includesName) {
      alert(`${value} уже есть в списке контактов`);
      event.target.reset();
      return;
    }

    dispatch(addContact(object));

    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.labelForm} htmlFor={idName}>
        Имя
      </label>
      <input
        className={css.nameForm}
        id={idName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может содержать только буквы, апостроф, дефис и пробелы. Например, Адриан, Джейкоб Мерсер, Шарль де Батц де Кастельмор д'Артаньян"
        required
      />
      <label className={css.labelForm} htmlFor={idNumber}>
        Номер телефона
      </label>
      <input
        className={css.numberForm}
        id={idNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен содержать только цифры и может содержать пробелы, дефисы, скобки и может начинаться с +"
        required
      />
      <button type="submit" className={css.formBtn}>
        Добавить контакт
      </button>
    </form>
  );
};
