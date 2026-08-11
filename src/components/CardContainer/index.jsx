import { useState, useEffect } from 'react';
import Card from "../Card";
import './index.css';

const key = import.meta.env.VITE_PEXELS_API_KEY;


const CardContainer = ({ query }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=10`, {
            headers: {
                Authorization: key
            }
        }).then((response) => response.json())
          .then((json) => json.photos)
          .then((photos) => {
            setData(photos.map(({ id, alt, src}) => ({ id, alt, url: src.portrait })))
            console.log(photos)
          })
    }, [query]);

    return (
        <div className="card__container">
            {   
                data.map(({ url, alt, id }) => {
                    return (
                        <Card key={ id }
                              url={ url }
                              alt={ alt } />
                    );
                })
            }
        </div>
    );
};

export default CardContainer;
