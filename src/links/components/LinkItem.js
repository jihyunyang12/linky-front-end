import React from 'react';
import './LinkItem.css';
import Card from '../../shared/components/UIElements/Card';


const LinkItem = props =>{
    return (
        <li className='link-item'>
            <Card linkItem={props.linkItem}></Card>
        </li>
    )
}

export default LinkItem;