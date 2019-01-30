import React, { Component, Fragment } from 'react';
import './index.scss'
import dataFunction from './dateFunction'

export default (props) => {


  let character = props.item
  return (
    <div className='wrap-content character'>

      <img className='character_img' src={character.image.small_url} />
      <div className='charaction-description'>
        <p className='character__name'>{character.name}</p>
        <p className='character__real-name'><span>Real name</span> {character.real_name}</p>
        <p className='character__publisher-name'><span>Publicher:</span> {character.publisher.name}</p>
        <p className='character__gender'><span>Gender: </span>{character.gender == 1 ? "man" : "woman"}</p>
        <p className='character__update'><span>Updated:</span> {dataFunction(character.date_last_updated)}</p>
        <p className='character__deck'>{character.deck}</p>

      </div>
    </div>
  );
}


