import './App.css'
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import {useEffect, useState} from "react";

function App() {

    const [contacts, setContacts] = useState(() => {
        const savedContacts = window.localStorage.getItem("saved-contacts");

        if (savedContacts !== null) {
            return JSON.parse(savedContacts);
        }

        return [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ];
    });

    const [filteredContacts, setFilteredContacts] = useState([...contacts]);

    const [search, setSearch] = useState('');

    useEffect(() => {
        setFilteredContacts(contacts.filter(value => search === '' || value.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
    }, [search]);

    useEffect(() => {
        setFilteredContacts(contacts.filter(value => search === '' || value.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
        window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm contacts={contacts} setContacts={setContacts}/>
            <SearchBox setSearch={setSearch}/>
            <ContactList filteredContacts={filteredContacts} contacts={contacts} setContacts={setContacts}/>
        </div>
    )
}

export default App
