import React from 'react'
import './Cards.css';

function Cards({ cards }) {
  return (
	<div>
    {cards.map((card) => (<img key={card.id} className='card' alt={`giphy-${card.id}`} src={card.images.original.url} />))}
	</div>
  )
}

export default Cards