import React from "react";
import './tagItem.css';

const TagItem = props =>{
    return(
        <li className="tag-item">
            {props.tagItem.text}
        </li>
    )
}
export default TagItem;