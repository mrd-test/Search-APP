import './index.css';

const SearchBar = ({ value, onChange }) => {

    return(
        <input className="input" placeholder="Search..." type="text" value={ value } onChange={ onChange }></input>
        
    );
};


export default SearchBar;
