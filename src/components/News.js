import React from 'react'
import './css/News.css'
import NewsCard from './NewsCard'

const News = () => {
    return (
        <div className="news-wrapper">
            <div className="news-card-body col-md-8 mx-auto">
                NEWS FEED
                <NewsCard/>
                <NewsCard/>
            </div>
        </div>
    )
}

export default News
