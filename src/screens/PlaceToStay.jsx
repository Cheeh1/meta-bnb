import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Options from '../components/Options'
import Nfts from '../components/Nfts'
import nftsData from '../data/nftsData'
import NftsCss from '../styles/Nfts.module.css'

const PlaceToStay = () => {
    const nftElements = nftsData.map(nft => {
        return (
          < Nfts
          key = {nft.id}
          nft = {nft}
        />
         )
      })

    return (
        <>
            < Navbar />
            < Options />
            <div className={NftsCss.props}>
                { nftElements}
            </div>
            < Footer />
        </>
    )
}
export default PlaceToStay;