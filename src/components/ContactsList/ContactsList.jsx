import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactsList = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    const getVisibleContact = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
        );
    };

    const visibleContacts = getVisibleContact();
    return (
        <div >
            <ul>
                {visibleContacts.map(contact => (
                    <li key={contact.id}>
                        <span>{contact.name}</span>
                        <span> : {contact.number}</span>
                        <button
                            onClick={() => dispatch(deleteContact(contact.id))}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ContactsList;