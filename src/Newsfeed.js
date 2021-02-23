import React from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'
import Chip from './Chip'
import { Avatar } from "@material-ui/core";

const popularTopics=[
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
]
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
                <div className="newsfeed__market__section">
                    <div className="newsfeed__market__box">
                        <p>Market Closed</p>
                        <h1>Happy Thanksgiving</h1>
                    </div>
                </div>
                <div className="newsfeed__popularlists__section">
                <div className="newsfeed__popularlists__intro">
                    <h1>Popular lists</h1>
                    <p>Show More</p>
                </div>
                <div className="newsfeed_popularlists_badges">
                    {popularTopics.map((topic) => (
                        <Chip 
                            // className="topic__badge"
                            // variant="outlined"
                            label={topic}
                            image={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                            />
                        
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Newsfeed
