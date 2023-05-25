import React from 'react'
import './ContentContainer.css'
import alliance from '../images/alliance.png'
import image from '../images/image.png'




const ContentContainer = ({characterImage, name,height,onButtonClick,gender,birthYear,eyeColor,hairColor,mass,skinColor }) => {

  return (
    <div className='cardContainer'>
      <div className='leftCardContainer'>
        <div className="upperSide">
          <h1 id='name'>{name}</h1>
          <p>Height: {height}</p>
        </div>
        <div className='bottomSide'>
          <p className='description'>{name} is a {gender} character born in {birthYear}. With striking {eyeColor} eyes and {hairColor} hair, they possess a distinct appearance that catches the attention of those around them. Standing at a height of {height} centimeters and weighing {mass} kilograms, {name} has a balanced physical build, capable of undertaking challenging tasks. <br></br> Their fair {skinColor} skin serves as a reminder of their unique heritage and background. </p>
          <button className='allianceButton' onClick={onButtonClick}><img className='icon' src={alliance} /></button>
        </div>
      </div>
      <div className='rightCardContainer'>
        <img  className='rightSideImage' src={image}></img>
      </div>
    </div>
  )
}
export default ContentContainer;