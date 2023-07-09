import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../redux/contactsSlice';

export const ContactForm = () => {
    const [contact, setContact] = useState({ name: '', number: '' });
    const contacts = useSelector(state => state.contacts.contacts);
    const dispatch = useDispatch();

    const handleChange = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    };

    const checkName = name => {
        return contacts.find(contact => contact.name === name);
    };

    const handleSubmitaddContact = e => {
        e.preventDefault();
        if (checkName(contact.name)) {
            setContact({
                name: '',
                number: '',
            });
            alert('Такий контакт існує...');

            return;
        }

        const newContact = contact;
        contact.id = nanoid();
        dispatch(addContact(newContact));
        setContact({
            name: '',
            number: '',
        });
    };

    return (
        <form onSubmit={handleSubmitaddContact}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder="Name"
                    value={contact.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Phone
                <input

                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder="Phone"
                    required
                    value={contact.number}
                    onChange={handleChange}
                />
            </label>

            <button type="submit">Add contact</button>
        </form>
    );
};