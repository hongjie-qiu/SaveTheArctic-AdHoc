import React from "react";
import "./index.css";

class News extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    async componentDidMount() {
      let res = await fetch(
        `https://newsapi.org/v2/everything?q=arctic+and+wildlife&sortBy=publishedAt&apiKey=2b9f4fcd5b4f41f682de8debe01988ce`
      );
      let data = await res.json();
      console.log(data, typeof data.articles, data.articles, typeof ar);
      let article = data.articles.map((p) => {
        return (
          <div className="news p-8">  
          <div className="cards max-w-sm rounded-xl overflow-hidden shadow-lg">
            <img className="4-full" src={p.urlToImage}/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{p.title}</div>
              <p className="text-base">
                {p.description}
              </p>
              <button className="button font-bold text-l mb-2"> <a href={p.url}>Read More</a></button>
            </div>
          </div>
        </div>
        );
      });
      this.setState({ cardInfo: article });
    }
    render() {
      return  <div className="newsPage p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">{this.state.cardInfo} </div>;
  }}

export default News;