import s from './SearchBox.module.css';

export default function SearchBox({setSearch}) {
    const handleChangeSearchInput = evt => {
        setSearch(evt.target.value);
    };

    return (
        <div className={s.form}>
            <label htmlFor="search" className={s.label}>Find contacts by name</label>
            <input type="text" id="search" name="search" className={s.input} onChange={handleChangeSearchInput}/>
        </div>
    );
}