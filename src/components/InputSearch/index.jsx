import './styles.css'
export const InputSearch = ({ handleInputSearch, search }) => {

    return (
        <input className="input" value={search} placeholder="Search Here" onChange={handleInputSearch} type='search' />
    )
}