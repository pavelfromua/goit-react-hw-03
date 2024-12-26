import s from './ContactForm.module.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {nanoid} from 'nanoid';
import * as Yup from 'yup';

export default function ContactForm({addContact}) {
    const handleSubmit = (values, {resetForm}) => {
        addContact({id: nanoid(), name: values.name, number: values.number});
        resetForm();
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Required')
            .min(3, 'Too Short!')
            .max(50, 'Too Long!'),
        number: Yup.string()
            .required('Required')
            .min(3, 'Too Short!')
            .max(50, 'Too Long!'),
    });

    return (
        <Formik
            initialValues={{
                name: '',
                number: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <Form className={s.form}>
                <div className={s.fieldContainer}>
                    <label htmlFor="name" className={s.label}>Name</label>
                    <Field name="name" id="name" type="text" className={s.input}/>
                    <ErrorMessage name="name" component="div" className={s.error} />
                </div>
                <div className={s.fieldContainer}>
                    <label htmlFor="number" className={s.label}>Number</label>
                    <Field name="number" id="number" type="text" className={s.input}/>
                    <ErrorMessage name="number" component="div" className={s.error} />
                </div>
                <button className={s.btn} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}