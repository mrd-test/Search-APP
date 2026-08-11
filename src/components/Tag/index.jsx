import './index.css';

const Tag = ({ onClick, isActive, text }) => {
    return (
        <button onClick={ onClick } 
                type="button" 
                className={ `tag${isActive ? ' tag_active' : ''}` }>{ text }</button>
    );
};

export default Tag;
