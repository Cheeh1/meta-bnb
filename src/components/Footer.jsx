import React from 'react'
import { facebook, ftrLogo, instagram, twitter } from '../assets';
import FooterCss from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <section className={FooterCss.ftr}>
                <div className={FooterCss.ftrItem}>
                    <img src={ftrLogo} alt="metabnb" />
                    <div className={FooterCss.ftrLogo}>
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                    </div>
                    <p className={FooterCss.txt}>&copy; 2022 Metabnb</p>
                </div>

                <div className={FooterCss.ftrItem2}>
                    <h3 className={FooterCss.header}>Community</h3>
                    <ul className={FooterCss.list}>
                        <li>
                            <a className={FooterCss.link} href="#nfts">Nfts</a>
                        </li>
                        <li>
                            <a className={FooterCss.link} href="#tokens">Tokens</a>
                        </li>
                        <li>
                            <a className={FooterCss.link} href="#landlord">Landlords</a>
                        </li>
                        <li>
                            <a className={FooterCss.link} href="#discord">discord</a>
                        </li>
                    </ul>
                </div>
                <div className={FooterCss.ftrItem2}>
                    <h3 className={FooterCss.header}>Places</h3>
                    <ul className={FooterCss.list}>
                        <li>
                            <a className={FooterCss.link} href="#castle">Castle</a>
                        </li>
                        <li>
                            <a className={FooterCss.link} href="#farms">Farms</a>
                        </li>
                        <li>
                            <a className={FooterCss.link} href="#beach">Beach</a>
                        </li>
                        <li>
                            <a className={FooterCss.link} href="#lms">Learn more</a>
                        </li>
                    </ul>
                </div>
                <div className={FooterCss.ftrItem2}>
                    <h3 className={FooterCss.header}>About us</h3>
                    <ul className={FooterCss.list}>
                        <li>
                            <a className={FooterCss.link} href="#roadmap">Roadmap</a>
                        </li>
                        <li>
                            <a className={FooterCss.link} href="#creators">Creators</a>
                        </li>
                        <li>
                            <a className={FooterCss.link} href="#career">Career</a>
                        </li>
                        <li>
                            <a className={FooterCss.link} href="#contact">Contact us</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
};
export default Footer;