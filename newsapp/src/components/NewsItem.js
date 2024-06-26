import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className='my-3'>
       <div className="card" >
  <img src={!imageUrl?"https://c.ndtvimg.com/2024-01/6om28o0g_rishi-sunak-reuters_625x300_12_January_24.jpeg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
