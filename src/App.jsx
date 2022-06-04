// import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm.js';
import ContactList from './components/ContactList/ContactList.js';
import Filter from './components/Filter/Filter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getContacts } from 'redux/contacts/contacts-selector';
import { addContact } from 'redux/contacts/contacts-operations';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { contactsLoading } from 'redux/contacts/contacts-selector';

import './index.css';
import { CSSTransition } from 'react-transition-group';
import titleAppearing from './titleAppearing.module.css';
import phonebookAppearing from './phonebookAppearing.module.css';

export default function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const loading = useSelector(contactsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const updateContacts = ({ name, phone }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts list!`);
    } else {
      dispatch(addContact({ name, phone }));
    }
  };

  return (
    <>
      <div className="phonebook__container">
        <CSSTransition
          in
          appear
          timeout={500}
          classNames={titleAppearing}
          unmountOnExit
        >
          <h1 className="phonebook__title">Phonebook</h1>
        </CSSTransition>

        <CSSTransition
          in
          appear
          timeout={500}
          classNames={phonebookAppearing}
          unmountOnExit
        >
          <ContactForm changeContactsState={updateContacts} />
        </CSSTransition>
        {loading && <h1 className="loading">Loading...</h1>}
        <CSSTransition
          in
          appear
          timeout={500}
          classNames={titleAppearing}
          unmountOnExit
        >
          <h2 className="contacts__title">Contacts</h2>
        </CSSTransition>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
