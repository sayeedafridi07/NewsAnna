import React from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchNews = async () => {
    props.setProgress("10%");
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress("30%");
    let parsedData = await data.json();
    props.setProgress("70%");
    setArticles(parsedData.articles);
    setLoading(false)
    props.setProgress("100%");
  };
  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        NewsMonkey - Top Headlines
      </h1>
      {loading && <Spinner />}
      {/* <Spinner /> */}
      <div className="container">
        <div className="row">
          {articles.map((content) => {
            return (
              <div className="col-md-4" key={content.url}>
                <Newsitems
                  title={content.title ? content.title : ""}
                  description={content.description ? content.description : ""}
                  imageUrl={content.urlToImage}
                  newsUrl={content.url}
                  author={content.author}
                  date={content.publishedAt}
                  source={content.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

News.defaultProps = {
  country: "in",
  category: "general",
  apikey: "3702662ca6844c1c849f543f2e7de7d3",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  apikey: PropTypes.string,
};

export default News;
