import React from 'react';

const Filter = ({ change, filter, contacts }) => {
    function getFilteredName (event) {
        const { value } = event.currentTarget;
        change(value);
    }

    return contacts.length !== 0 ? (
        <>
        <p>Find contacts by Name</p>
        <input 
            type="text"
            name="filter"
            value={filter}
            onChange={getFilteredName}
        />
        </>
        ) : (
        <p>There is no contacts in your Phonebook</p>
    )
};

export default Filter;