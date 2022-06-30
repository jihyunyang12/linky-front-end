import React from "react";
import TagItem from "./tagItem";
import './tagList.css';

const TagList = props =>{
    return(
        <ul className="tag-list">
            {props.tags.map(tag=><TagItem key={tag.id} tagItem={tag}></TagItem>)}
        </ul>
    )
}
export default TagList;