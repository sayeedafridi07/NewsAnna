import React from "react";

function Newsitems(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="shadow p-3 mb-5 bg-body rounded card text-center">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
          width={320}
          height={180}
        />
        <div className="card-body" style={{ backgroundColor: "#e3f2fd" }}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <div>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-outline-danger"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsitems;
