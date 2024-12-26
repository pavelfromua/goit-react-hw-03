import s from './Contact.module.css';
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

export default function Contact({ id, name, number, onDeleteContact }) {
    return (
            <li className={s.container}>
                <div className={s.fields}>
                    <div className={s.fieldRow}>
                        <IoPerson className={s.icon} />
                        <span>{name}</span>
                    </div>
                    <div className={s.fieldRow}>
                        <FaPhone className={s.icon} />
                        <span>{number}</span>
                    </div>
                </div>
                <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
    );
}