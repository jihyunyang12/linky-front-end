import React from "react";
import './Card.css'
import TagList from "./tagList";

const Card = props => {
    let imgSrc;
    //TODO get img src url from the meta tag
    // const userAction = async () => {
    //     var url = 'https://www.udemy.com/';
    //     var urlEncoded = encodeURIComponent(url);
    //     var apiKey = '37abbb3f-8289-4539-9fb0-dfaba8296c15'; // <-- Replace with your app_id from https://www.opengraph.io/

    //     // The entire request is just a simple get request with optional query parameters
    //     var requestUrl = "https://opengraph.io/api/1.1/site/" + urlEncoded + '?app_id=' + apiKey;

    //     const response = await fetch(requestUrl);
    //     const resJson = await response.json(); //extract JSON from the http response
    //     imgSrc = resJson.openGraph.image.url.toString();
    //     // imgSrc = 'https://s.udemycdn.com/meta/default-meta-image-v2.png';
    //     console.log(imgSrc === 'https://s.udemycdn.com/meta/default-meta-image-v2.png');
    //   }

    //   const a = await userAction();
    imgSrc = 'https://s.udemycdn.com/meta/default-meta-image-v2.png';
    return(
        <div className="card-container">
            
            <img src = {imgSrc} alt={'example photo'} />
            
            <div className="text-container">
                <div className="tags">
                    <TagList tags={props.linkItem.tags}></TagList>
                </div>
                <h3>{props.linkItem.title}</h3>
                <a href ={props.linkItem.url}> Go to Link</a>
                <div className="description">{props.linkItem.description}</div>
            </div>
        </div>
    )
}
export default Card;
