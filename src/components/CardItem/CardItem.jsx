import React from "react";

import ExternalLink from "components/ExternalLink/ExternalLink";
import { newsShape } from "utils/commonPropTypes";
import { reserveImgUrl } from "utils/config";

import "./CardItem.css";

const CardItem = ({ data }) => {
  const {
    title,
    description,
    author,
    url,
    urlToImage,
    publishedAt,
    content,
  } = data;

  if (!data) return null;

  return (
    <div className="collection-item col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img
          src={urlToImage || reserveImgUrl}
          className="collection-img card-img-top"
          alt={title || ""}
        />
        <div className="card-body">
          {title && <h5 className="card-title">{title}</h5>}
          {description && <p className="card-text">{description}</p>}
          {content && <p className="card-text">{content}</p>}
        </div>
        <ul className="list-group list-group-flush">
          {author && <li className="list-group-item">Author: {author}</li>}
          {publishedAt && (
            <li className="list-group-item">Published at: {publishedAt}</li>
          )}
        </ul>
        {url && (
          <div className="card-body">
            <ExternalLink href={url} className="card-link">
              Link
            </ExternalLink>
          </div>
        )}
      </div>
    </div>
  );
};

CardItem.propTypes = {
  data: newsShape,
};

export default CardItem;
