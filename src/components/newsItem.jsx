import React from "react";


const NewsItem = (props) => {
    let { desc, imageURL, newsUrl, sourceName, title } = props;
    const isValidImageURL = typeof imageURL === 'string' && imageURL.trim() !== '';
    return (
        <div className="card my-3">
            {isValidImageURL && <img src={imageURL} className="card-image-top" alt="..." />}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="w-100 fs-6 text-body-secondary text-end">- {sourceName}</p>
                <p className="card-text">{desc}</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read More...</a>
            </div>
        </div>
    )
}

export default NewsItem;