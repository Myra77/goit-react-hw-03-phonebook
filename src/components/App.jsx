import { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createUser = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    }
    if (this.state.contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };
  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contacts => contacts.id !== contactId
        ),
      };
    });
  };
  onFilter = text => {
    this.setState(prevState => ({
      ...prevState,
      filter: text,
    }));
  };
  
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      console.log('The field contacts was recently mounted');
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('The field contacts was recently updated');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm createUser={this.createUser} />

        <h2>Contacts</h2>
        <Filter onFilter={this.onFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.deleteContact}
        />
      </div>
    );
  };
}
