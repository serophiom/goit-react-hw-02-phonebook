import React, { Component } from 'react';
import './FormAddContacts.css'

class FormAddContacts extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <div className="input-form">
                <label>
                    Name<input
                    className="add-input"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                /> 
                </label>
                <label>
                    Number<input
                    className="add-input"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={this.state.number}
                    onChange={this.handleChange}
                    />
                </label>

                <button className="btn-add" type="submit">Add contact</button>
            </div>  
            </form>
        );
    };
}

export default FormAddContacts;