import { CollectionsOutlined } from '@material-ui/icons';
import React, {useState, useEffect} from 'react';
import './Stats.css';
import axios from "axios";
import StatsRow from './StatsRow.js'

const TOKEN="c0pamln48v6rvej4h7tg ";
const BASE_URL = "https://finnhub.io/api/v1/quote";
const testData=[];
function Stats() {
    const [stockData, setStocksData] = useState([]);

    const getStocksData = (stock)=>{
        return axios.get(`${BASE_URL}${stock}${TOKEN}`).catch((error)=>{
            console.error("Error",error.message);
        });
    };

    useEffect(() => {
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
        let tempStocksData=[]
        let promises = [];
        stocksList.map((stock) => {
            promises.push(
                getStocksData(stock)
                .then((res) => {
                tempStocksData.push({
                    name: stock,
                    
                });
        })
        )
        });
    
        Promise.all(promises).then(()=>{
        setStocksData(tempStocksData);
        console.log(tempStocksData);
        })
    }, []);

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__row">
                    </div>
                </div>
                <div className="stats__header">
                    <p>Lists</p>
                </div>
                <div className="stats__content">
                    <div className="stats__row">
                        {stockData.map((stock) =>(
                            <StatsRow
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                price={stock.c}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Stats
