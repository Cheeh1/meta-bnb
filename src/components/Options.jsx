import React from 'react'
import { setting } from '../assets'
import OptionsCss from '../styles/Options.module.css'

const Options = () => {
    return (
        <>
            <section className={OptionsCss.flex}>
                    <ul className={OptionsCss.list}>
                        <li className={OptionsCss.link}>Resturant</li>  
                        <li className={OptionsCss.link}>Cottage</li>  
                        <li className={OptionsCss.link}>Castle</li>  
                        <li className={OptionsCss.link}>fantast city</li>  
                        <li className={OptionsCss.link}>beach</li>  
                        <li className={OptionsCss.link}>Carbins</li>  
                        <li className={OptionsCss.link}>Off-grid</li>  
                        <li className={OptionsCss.link}>Farm</li>  
                    </ul>
                    <div className={OptionsCss.btn}>
                        <p className={OptionsCss.btnTxt}>Location</p>
                        <img src={setting} alt="logo" />
                    </div>
            </section>
        </>
    )
}
export default Options