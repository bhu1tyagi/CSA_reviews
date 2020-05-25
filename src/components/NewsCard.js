import React ,{useState} from 'react'
import avatar from '../img/avatar.jpeg'
import './css/NewsCard.css'
import {FaHeart} from 'react-icons/fa'

let color = 0;

const NewsCard = () => {
    const [heart, setHeart] = useState(0);
    const [colorHeart, setColorHeart] = useState(1)
    return (
        <div className="news-card row">
            <div className="nc-img">
                <img src={avatar} />
            </div>
            <div className="col-md-6">
                <div className="nc-body">
                    <div className="nc-header">
                        <h5>SU-BITS Pilani</h5>
                        <h6><tiny>Feb 29</tiny></h6>
                    </div>
                    <div className="nc-title">
                        <h2>ZED A SHAW</h2>
                    </div>
                    <div className="nc-para">
                        <p>The article was written by the English Press Club Zed A. Shaw is a programmer and artist who loves teaching people how to code, and painting. Zed was said to...</p>
                    </div>
                </div>
            <div className="nc-divider"></div>
            <div className="nc-footer">
                    <div>44 views</div>
                    <div>{heart}  <FaHeart color={colorHeart? "black":'red'} onClick={() => {
                        {color%2==0?setHeart(heart+1):setHeart(heart-1)}
                        {color%2==0?setColorHeart(0):setColorHeart(1)}
                        color++;
                    }} /></div>
            </div>
            </div>
        </div>
    )
}

export default NewsCard
