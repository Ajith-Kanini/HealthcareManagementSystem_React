import React from 'react'
import './NavCards.css'
const NavCards = () => {
    const arr=[1,2,3,4]
  return (
    <div className="NavCards">
      <div className="card-container">
        {arr.map((a) => (
          <div className="card" key={a}>
            <h4>Card {a}</h4>
            <p>Some content here</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NavCards
