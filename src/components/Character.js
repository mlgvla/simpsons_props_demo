import React from "react"

function Character({ character }) {
   const { name, image, quotes } = character
   return (
      <div class="card" alt="">
         <img src={image} alt={name} />
         <h2>{name}</h2>
         <p>{quotes[0]}</p>
      </div>
   )
}

export default Character
