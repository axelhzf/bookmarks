import React, {Component} from "react";
import ReactDom from "react-dom";

import "../css/main.css";

class Bookmarks extends Component {

  render() {
    const {urls} = state;
    return (
      <div>
        <div className="search">
          <input type="text"/>
        </div>
        
        <div className="results">
        {
          urls.map(url => (
              <div key={url.link} className="result">
                <div className="url">{url.link}</div>
                <div className="tags">{ url.tags.map(tag => <span key={tag} className="tag">{tag}</span>) }</div>
              </div>
            )
          )
        }
        </div>
        
      </div>
    );
  }
  
}

const state = {
  urls: [
    {link: "http://google.com/pre", tags: ["pre", "google"]},
    {link: "http://google.com/pro", tags: ["pre", "google"]}
  ]
};

ReactDom.render(<Bookmarks/>, document.getElementById("app"));