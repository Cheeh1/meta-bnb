import React from 'react'
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
                        <a className={NavbarCss.navlink} href='#home'>Home</a>
                    </li>
                    <li>
                        <a className={NavbarCss.navlink} href='#pls'>Place to stay</a>
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