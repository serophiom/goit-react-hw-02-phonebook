import React from 'react';
import './Contacts.css'

const Contacts = ({ contacts, showContacts, onDeleteContact }) => {
    return contacts && (
        <ul>
            {showContacts.map(({ id, name, number }) => (
                <li key={id} className="contacts__item">
                    <p className="contacts__text">{name}: {number}</p>
                    <button onClick={() => onDeleteContact(id)}>delete</button>
                </li>
            ))}
        </ul>
    )
    
};

export default Contacts;