import React from 'react'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Cards from '../components/Cards'
import Info from '../components/Info'
import Footer from '../components/Footer'
import cardData from '../data/cardData'
import CardsCss from '../styles/Cards.module.css'

const Homepage = () => {
    const cardElements = cardData.map(card => {
        return (
          < Cards 
          key = {card.id}
          card = {card}
        />
         )
      })

    return (
        <>
            < Navbar />
            < Features />
            <div className={CardsCss.props}>
             { cardElements}
            </div>
            < Info />
            < Footer />
        </>
    )
}
export default Homepage