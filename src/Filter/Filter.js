import React from 'react';
import PropTypes from 'prop-types';

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

Filter.propTypes = {
    change: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    contacts: PropTypes.array.isRequired
}

export default Filter;