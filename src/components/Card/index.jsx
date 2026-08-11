import './index.css';

const Card = ({ url, alt }) => {
    return (
        <div className="card">
            <img className="card__image" src={ url } alt={ alt } />
        </div>
    );
};

export default Card;
