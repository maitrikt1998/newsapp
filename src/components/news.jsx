import React, { useEffect, useState } from "react";
import NewsItem from "./newsItem";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    let category = props.category;
    const [page, SetPage] = useState(1);
    const [articles, SetArticles] = useState([]);
    const [totalResults, SetTotalResults] = useState(0);
    

    let resultNews =  async() => {
        const url  = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=9aa9299818d44fc59611ddc89eaf3fed`;
        let data = await fetch(url);
        const parsedData = await data.json();
        SetArticles(parsedData.articles);
        SetTotalResults(parsedData.totalResults);
    }

    useEffect(()=>{
        resultNews();
    },[]);

    const fetchData = async() =>{
        const url  = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=9aa9299818d44fc59611ddc89eaf3fed`;
        SetPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        SetArticles(articles.concat(parsedData.articles));
    };


    return(
       
        <InfiniteScroll dataLength={articles.length} next={fetchData}
            hasMore={
                articles.length < totalResults
            }
            loader={
                <h4 className="text-center">
                    Loading...
                </h4>}
            endMessage={
                <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }>


            <div className="container my-3">
                <div className="row">
                    {articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem sourceName={element.source.name}
                                    title={element.title}
                                    desc={element.description}
                                    imageURL={element.urlToImage ?
                                        element.urlToImage :
                                        Image}
                                    newsUrl={element.url}

                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </InfiniteScroll>
        
    );

}

export default News;