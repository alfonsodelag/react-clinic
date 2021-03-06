import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import defaultImg from "../images/room-1.jpeg"
import PropTypes from "prop-types"
import { FaRestroom } from 'react-icons/fa';

export default function Service({ service }) {
    const { id } = service;
    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        // Adding item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                name,
                slug,
                images,
                price,
            }
        })
    };

    const { name, slug, images, price } = service;
    return <article className="room">
        <div className="img-container">
            <img src={images[0] || defaultImg} alt="single room" />
            <div className="price-top">
                <h6>${price}</h6>
                <p>per night</p>
            </div>
            <Link to={`/services/${slug}`} className="btn-primary room-link">
                Features
            </Link>
        </div>
        <p className="room-info">{name}</p>
        <button onClick={addToBasket} className="room-button">Order</button>
    </article>
}

Service.propTypes = {
    service: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}