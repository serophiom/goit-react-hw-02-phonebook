import React, { Component } from 'react';
import FormAddContacts from '../FormAddContacts/FormAddContacts';
import Contacts from '../Contacts/Contacts';
import { v4 as uuidv4 } from 'uuid';
import Filter from '../Filter/Filter';

class Phonebook extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: ''
    }

    formSubmitHandler = ({ name, number }) => {
        const { contacts } = this.state;
        const alreadyAddedContact = contacts.find(contact => contact.name === name);
        if (alreadyAddedContact) {
            alert(`${alreadyAddedContact.name} is already in contacts`);
            return
        }
        this.setState(({ contacts }) => ({
            contacts: [...contacts, { id: uuidv4(), name, number }]
        }))
    };

    handleFilter = (value) => {
        this.setState({ filter: value });
    };

    deleteContact = (contactId) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId)
        }))
    };

    render() {
        const { contacts, filter } = this.state;
        const toLowerCase = filter.toLowerCase();
        const showContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(toLowerCase)
        );

        return (
            <div>
                <h1>Phonebook</h1>
                <FormAddContacts onSubmit={this.formSubmitHandler}/>
                <Filter change={this.handleFilter} filter={filter} contacts={contacts}/>
                <Contacts contacts={contacts} showContacts={showContacts} onDeleteContact={this.deleteContact}/>
            </div>
        );
    }
}

export default Phonebook;