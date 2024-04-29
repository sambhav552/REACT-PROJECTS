import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types"
export class News extends Component {
    static defaultProps = {
       country:'in',
       pageSize:8,
       category:'general'
      }
      static propTypes = {
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string
      }
  articles = [
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "WYATTE GRANTHAM-PHILIPS, ANNE D'INNOCENZIO",
      title:
        "Retailer Express files for bankruptcy, announces store closures - The Associated Press",
      description:
        "Express Inc. has filed for Chapter 11 bankruptcy protection and the fashion retailer is seeking to sell the majority of its stores. Columbus, Ohio-based Express is also the parent of Bonbons and Upwest brands. It said Monday it planned to close 95 of its Expr…",
      url: "https://apnews.com/article/express-bankruptcy-filing-store-closures-618b8c65b1d1b6bb21629b269aecf645",
      urlToImage:
        "https://dims.apnews.com/dims4/default/f2c5e35/2147483647/strip/true/crop/3600x2025+0+188/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff2%2Fb9%2F39f3fa60405576ba38e68bfe36f1%2Fdbeaa758d8484a33b1f7e77dbdca1c5a",
      publishedAt: "2024-04-22T16:25:00Z",
      content:
        "NEW YORK (AP) Express Inc once a trendsetter of casual office attire that has struggled to compete with the likes of Zara and H&amp;M has filed for Chapter 11 bankruptcy protection.\r\nThe retailer bas… [+3801 chars]",
    },
    // {
    //     "source": {
    //         "id": "associated-press",
    //         "name": "Associated Press"
    //     },
    //     "author": "WYATTE GRANTHAM-PHILIPS, ANNE D'INNOCENZIO",
    //     "title": "Retailer Express files for bankruptcy, announces store closures - The Associated Press",
    //     "description": "Express Inc. has filed for Chapter 11 bankruptcy protection and the fashion retailer is seeking to sell the majority of its stores. Columbus, Ohio-based Express is also the parent of Bonbons and Upwest brands. It said Monday it planned to close 95 of its Expr…",
    //     "url": "https://apnews.com/article/express-bankruptcy-filing-store-closures-618b8c65b1d1b6bb21629b269aecf645",
    //     "urlToImage": "https://dims.apnews.com/dims4/default/f2c5e35/2147483647/strip/true/crop/3600x2025+0+188/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff2%2Fb9%2F39f3fa60405576ba38e68bfe36f1%2Fdbeaa758d8484a33b1f7e77dbdca1c5a",
    //     "publishedAt": "2024-04-22T16:25:00Z",
    //     "content": "NEW YORK (AP) Express Inc once a trendsetter of casual office attire that has struggled to compete with the likes of Zara and H&amp;M has filed for Chapter 11 bankruptcy protection.\r\nThe retailer bas… [+3801 chars]"
    // },
    // {
    //     "source": {
    //         "id": "associated-press",
    //         "name": "Associated Press"
    //     },
    //     "author": "WYATTE GRANTHAM-PHILIPS, ANNE D'INNOCENZIO",
    //     "title": "Retailer Express files for bankruptcy, announces store closures - The Associated Press",
    //     "description": "Express Inc. has filed for Chapter 11 bankruptcy protection and the fashion retailer is seeking to sell the majority of its stores. Columbus, Ohio-based Express is also the parent of Bonbons and Upwest brands. It said Monday it planned to close 95 of its Expr…",
    //     "url": "https://apnews.com/article/express-bankruptcy-filing-store-closures-618b8c65b1d1b6bb21629b269aecf645",
    //     "urlToImage": "https://dims.apnews.com/dims4/default/f2c5e35/2147483647/strip/true/crop/3600x2025+0+188/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff2%2Fb9%2F39f3fa60405576ba38e68bfe36f1%2Fdbeaa758d8484a33b1f7e77dbdca1c5a",
    //     "publishedAt": "2024-04-22T16:25:00Z",
    //     "content": "NEW YORK (AP) Express Inc once a trendsetter of casual office attire that has struggled to compete with the likes of Zara and H&amp;M has filed for Chapter 11 bankruptcy protection.\r\nThe retailer bas… [+3801 chars]"
    // },
    // {
    //     "source": {
    //         "id": "associated-press",
    //         "name": "Associated Press"
    //     },
    //     "author": "WYATTE GRANTHAM-PHILIPS, ANNE D'INNOCENZIO",
    //     "title": "Retailer Express files for bankruptcy, announces store closures - The Associated Press",
    //     "description": "Express Inc. has filed for Chapter 11 bankruptcy protection and the fashion retailer is seeking to sell the majority of its stores. Columbus, Ohio-based Express is also the parent of Bonbons and Upwest brands. It said Monday it planned to close 95 of its Expr…",
    //     "url": "https://apnews.com/article/express-bankruptcy-filing-store-closures-618b8c65b1d1b6bb21629b269aecf645",
    //     "urlToImage": "https://dims.apnews.com/dims4/default/f2c5e35/2147483647/strip/true/crop/3600x2025+0+188/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff2%2Fb9%2F39f3fa60405576ba38e68bfe36f1%2Fdbeaa758d8484a33b1f7e77dbdca1c5a",
    //     "publishedAt": "2024-04-22T16:25:00Z",
    //     "content": "NEW YORK (AP) Express Inc once a trendsetter of casual office attire that has struggled to compete with the likes of Zara and H&amp;M has filed for Chapter 11 bankruptcy protection.\r\nThe retailer bas… [+3801 chars]"
    // }
  ];
  constructor() {
    super();
    console.log("Hello i am a constructor from News Component");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("Cdm");
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5eb1b5926c294b609e2fa1dc506aa0f6&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }
  handlePrevClick = async () => {
    console.log("Prev");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5eb1b5926c294b609e2fa1dc506aa0f6&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    });
  };
  handleNextClick = async () => {
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5eb1b5926c294b609e2fa1dc506aa0f6&page=${
            this.state.page + 1
          }&pageSize=${this.props.pageSize}`;
          this.setState({loading:true})
          let data = await fetch(url);
          let parsedData = await data.json();
          
    
          this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading:false
          });
    } 
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin: '35px 0px'}}>NewsMonkey - Top Headlines</h2>
       {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
          disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
