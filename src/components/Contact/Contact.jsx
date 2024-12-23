import s from './Contact.module.css';
import {Form, Formik} from "formik";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

export default function Contact({ contacts, contact, setContacts }) {
    return (
        <Formik initialValues={{
            id: contact.id,
            name: contact.name,
            number: contact.number
        }} onSubmit={() => {
            setContacts(contacts.filter(val => val.id !== contact.id));
        }}>
            <Form className={s.container}>
                <div className={s.fields}>
                    <div className={s.fieldRow}>
                        <IoPerson className={s.icon} />
                        <span>{contact.name}</span>
                    </div>
                    <div className={s.fieldRow}>
                        <FaPhone className={s.icon} />
                        <span>{contact.number}</span>
                    </div>
                </div>
                <button type="submit">Delete</button>
            </Form>
        </Formik>
    );
}