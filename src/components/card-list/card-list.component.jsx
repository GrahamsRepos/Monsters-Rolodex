import React from 'react';
import './card-list.styles.css.css';
import {Card} from '../card/card.component';

export const CardList=(props)=>{
    console.log(props);
    //props.children renders the tags like h1 between <CardList></CardList> where the component is used
    return <div className='card-list'>
        {props.monsters.map(monster=>(<Card key={monster.id} monster={monster}/>))}
    </div>
};