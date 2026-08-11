import './index.css';

const SearchContainer = ({ SvgIcon, children }) => {
    return(
        <div className="search__container">
            <SvgIcon className="svg" />
            { children }
            
        </div>
    );
};

export default SearchContainer;
