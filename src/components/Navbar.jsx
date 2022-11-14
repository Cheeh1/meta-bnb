import React from 'react'
import { Link } from 'react-router-dom'
import { logo} from '../assets';
import NavbarCss from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <>
            <nav className={NavbarCss.nav}>
                <div>
                    <img className={NavbarCss.img} src={ logo } alt="logo" />
                </div>

                <ul className={NavbarCss.navlist}>
                    <li>
                        <Link className={NavbarCss.navlink} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={NavbarCss.navlink} to='/placeToStay'>Place to stay</Link>
                    </li>
                    <li>
                        <a className={NavbarCss.navlink} href='#nfts'>NFTS</a>
                    </li>
                    <li>
                        <a className={NavbarCss.navlink} href='#community'>Community</a>
                    </li>
                </ul>    

                <div>
                    <button className={NavbarCss.navbtn}>Connect waallet</button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;