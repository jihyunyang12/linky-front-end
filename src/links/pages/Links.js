import React from "react";
import Card from "../../shared/components/UIElements/Card";
import LinksList from "../components/LinksList";

const Links = () => {
  const LINKS = [
    {
      url: "https://www.udemy.com/",
      title: "Udemy",
      description: "Dev learning website",
      tags: [
        { id: 1, text: "Learning" },
        { id: 2, text: "Development" },
      ],
    },
    {
      url: "https://www.udemy.com/",
      title: "Udemy 2",
      description: "Dev learning website",
      tags: [
        { id: 3, text: "Learn" },
        { id: 4, text: "Dev" },
      ],
    },
  ];
  return <LinksList items={LINKS} />;
};

export default Links;
