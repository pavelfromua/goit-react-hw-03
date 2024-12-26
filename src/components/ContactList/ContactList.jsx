import s from './ContactList.module.css';
import Contact from "../Contact/Contact.jsx";

export default function ContactList({contacts, onDeleteContact}) {

    return (
        <ul className={s.list}>
            {contacts.map(contact => (<Contact key={contact.id} {...contact} onDeleteContact={onDeleteContact} />))}
        </ul>
    );
}