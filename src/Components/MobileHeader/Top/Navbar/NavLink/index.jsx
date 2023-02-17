import React from 'react'
import { Link } from 'react-router-dom'
import Style from './style'

const NavLink = ({ image, text, to }) => {

    return (
        <Style>
            <Link to={to}>
                <div className="nav__link__inner">
                    <div className='image__container'>
                        {image && <img src={image} alt={`to ${text}`} />}
                    </div>
                    <p>{text}</p>
                </div>
            </Link>
        </Style>
    )
}

export default NavLink