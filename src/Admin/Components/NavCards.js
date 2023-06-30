import React from 'react'
import './NavCards.css'
const NavCards = () => {
    const arr=[1,2,3,4]
  return (
    <div className="NavCards">
      <div className="card-container">
        {arr.map((a) => (
          <div class="card">
  <div class="img"></div>
  <div class="textBox">
    <div class="textContent">
      <p class="h1">Clans of Clash</p>
      <span class="span">12 min ago</span>
    </div>
    <p class="p">Xhattmahs is not attacking your base!</p>
  <div>
</div></div></div>
        ))}
      </div>
    </div>
  )
}

export default NavCards
