import React from 'react'
import './ContentContainer.css'
import alliance from'../images/alliance.png'



const ContentContainer = ({ name, height, onButtonClick }) => {
  return (
    <div className='cardContainer'>
      <div className='leftCardContainer'>
        <div className="upperSide">
          <h1 id='name'>{name}</h1>
          <p>Height:{height}</p>
        </div>
        <div className='bottomSide'>
          <p>Some info that is not here yet</p>
          <button  className='allianceButton' onClick={onButtonClick}><img  className='icon' src={alliance}/></button>
        </div>
      </div>
      <div className='rightCardContainer'>
      <img src=''></img>
      </div>
    </div>
  )
}
export default ContentContainer;