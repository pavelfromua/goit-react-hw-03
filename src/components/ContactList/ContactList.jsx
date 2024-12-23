import s from './ContactList.module.css';
import Contact from "../Contact/Contact.jsx";

export default function ContactList({filteredContacts, contacts, setContacts}) {
    return (
        <ul>
            {filteredContacts.map(contact => (<li key={contact.id}><Contact contacts={contacts} contact={contact} setContacts={setContacts}/></li>))}
        </ul>
    );
}