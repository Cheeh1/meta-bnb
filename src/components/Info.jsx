import React from 'react'
import InfoCss from '../styles/Info.module.css'

const Info = () => {
    return (
        <>
            <section className={InfoCss.flex}>
                <div className={InfoCss.flexItem}>
                    <h2 className={InfoCss.header}>Metabnb NFTs</h2>
                    <p className={InfoCss.txt}>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button className={InfoCss.btn}>Learn more</button>
                </div>
                <img className={InfoCss.img} src="/images/grid-pics-2.png" alt="Nfts" />
            </section>
    
        </>
    )
}
export default Info;