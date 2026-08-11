import Tag from "../Tag";
import './index.css';

const TagContainer = ({ onClick, index, tags }) => {
    return (
        <div className="tag__container">
            {
                tags.map((text, idx) => <Tag key={ text } 
                                             text={ text }
                                             isActive={ index === idx }
                                             onClick={ () => onClick(idx) } />)
            }
        </div>
    )
};

export default TagContainer;
