import React from 'react'
import './StatsRow.css'

function StatsRow() {
    return (
        <div className="row">
            <div className="row__intro">
                <h1>$TSLA</h1>
                <p>545 SHARES</p>
            </div>
        <div className="row__chart">
        {}
        </div>
        <div className="row__numbers">
            <p className="row__price">$768.92</p>
            <p className="row__percentage"> +45.38%</p>
        </div>
    </div>
    )
}

export default StatsRow;
