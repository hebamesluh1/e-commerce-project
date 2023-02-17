import React from 'react'
import home from '../../../../Assets/image/mobile/home.png';
import categories from '../../../../Assets/image/mobile/list.png';
import favotites from '../../../../Assets/image/mobile/favorite_border.png';
import orders from '../../../../Assets/image/mobile/headset_mic.png';
import lang from '../../../../Assets/image/mobile/language.png';
import contact from '../../../../Assets/image/mobile/inventory_2.png';
import about from '../../../../Assets/image/mobile/business.png';
import { Container, Nav, Overlay } from './style'
import NavLink from './NavLink';
import User from './User';
const Navbar = ({closeNav,className=''}) => {
  return (
    <Nav className={className}>
    <Container>
        <User />
        <div className='nav__section border__bottom'>
            <NavLink to="/" text="Home" image={home} />
            <NavLink to="/" text="Categories" image={categories} />
            <NavLink to="/" text="Favorites" image={favotites} />
            <NavLink to="/" text="My orders" image={orders} />
        </div>
        <div className='nav__section border__bottom'>
            <NavLink to='/' text="English | USD" image={lang} />
            <NavLink to="/" text="Contact us" image={contact} />
            <NavLink to="/" text="About" image={about} />
        </div>
        <div className='nav__section'>
            <NavLink to="/" text="User agreement" />
            <NavLink to="/" text="Partnership" />
            <NavLink to="/" text="Privacy policy" />
        </div>
    </Container>
    <Overlay className={className} onClick={closeNav} />
</Nav>
  )
}

export default Navbar