import React from "react";
import "./LinksList.css";
import LinkItem from "./LinkItem";

const LinksList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No links found!</h2>
      </div>
    );
  } else {
    return (
      <ul className="links-list">
        {props.items.map((link) => (
          <LinkItem key={link.title} linkItem={link} />
        ))}
      </ul>
    );
  }
};

export default LinksList;
