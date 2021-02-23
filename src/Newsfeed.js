import React from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'

function Newsfeed() {
    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed_chartSection">
                    <div className="newsfeed__portfolio">
                        <h1>$282,678</h1>
                        <p>+$65.21 (+0.04%) Today
                        </p>
                    </div>
                    <div className="newfeed_chat">
                        <LineGraph/>
                        <TimeLine/>
                    </div>
                </div>
                <div className="newsfeed__buying__section">
                    <h2>Buying Power</h2>
                    <h2>$5.56</h2>
                </div>
            </div>
            
        </div>
    );
}

export default Newsfeed
