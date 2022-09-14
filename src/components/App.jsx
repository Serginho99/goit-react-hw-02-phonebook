import React, { Component } from 'react';
import AddContactForm from './form/AddContactForm';
import { nanoid } from 'nanoid';
import ContactsList from './contactsList/ContactsList';
export default class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
  };

  removeContact = id => {
    this.setState(prevState => {
      const newContact = prevState.contacts.filter(item => item.id !== id);
      return {
        contacts: newContact,
      };
    });
  };

  render() {
    const { filter } = this.state;
    const { addContact, changeFilter, removeContact } = this;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <AddContactForm onSubmit={addContact} />

        <ContactsList
          contacts={visibleContacts}
          value={filter}
          onChange={changeFilter}
          deleteContact={removeContact}
        />
      </>
    );
  }
}
