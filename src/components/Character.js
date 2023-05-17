import React from "react"
import Quote from "./Quote"

function Character({ character }) {

   const { name, image, quotes } = character

   const quotePs = quotes.map((quote, index) => <p key={index}>{quote}</p>)

   return (
      <div className="card">
         <img src={image} alt={name} />
         <h2>{name}</h2>
         {quotePs}
      </div>
   )
}

export default Character
