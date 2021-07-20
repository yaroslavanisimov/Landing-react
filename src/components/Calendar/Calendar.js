import React, {useEffect, useState} from 'react';
import './calendar.css';
import FetchData from '../../service/FetchData';
import { Link } from 'react-router-dom';
import Main from '../Main/Main';

const fetchData = new FetchData();

const Calendar =() => {
 
    useState [data, setData] = useState([]);

    useEffect(()=> {
        fetchData.getLaunches ()
            .then((launches) => setData(launches))}, [fetchData]);

    return (
            <>
                <Main/>
                <section className="calendar">
                <div className="container">
                <ul className="calendar-list">
                {
                    data.map(item => (
                        <li className="calendar-item" key={item.id}>
                            <article className="launches">
                                <div className="launches-image">
                                    <img src={item.links.patch.small} alt=""/>
                                </div>
                                <div className="launches-content">
                                    <h2 className="launches-title">{item.name}</h2>
                                    <Link to="/details" className="button launches-details">See more</Link>
                                </div>
                            </article>
                        </li>
                    ))
                }




{/*         
                    <li className="calendar-item">
                        <article className="launches">
                            <div className="launches-image">
                                <img src="https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png" alt=""/>
                            </div>
                            <div className="launches-content">
                                <h2 className="launches-title">
                                    <a href="https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html">
                                        DemoSat
                                    </a>
                                </h2>
                                <a href="./details.html" className="button launches-details">More</a>
                            </div>
                        </article>
                    </li>
        
                    <li className="calendar-item">
                        <article className="launches">
                            <div className="launches-image">
                                <img src="https://images2.imgbox.com/3d/86/cnu0pan8_o.png" alt=""/>
                            </div>
                            <div className="launches-content">
                                <h2 className="launches-title">
                                    <a href="http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary">
                                        Trailblazer
                                    </a>
                                </h2>
                                <a href="./details.html" className="button launches-details">More</a>
                            </div>
                        </article>
                    </li>
        
                    <li className="calendar-item">
                        <article className="launches">
                            <div className="launches-image">
                                <img src="https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png" alt=""/>
                            </div>
                            <div className="launches-content">
                                <h2 className="launches-title">
                                    <a href="https://en.wikipedia.org/wiki/Ratsat">
                                        RatSat
                                    </a>
                                </h2>
                                <a href="./details.html" className="button launches-details">More</a>
                            </div>
                        </article>
                    </li> */}
                </ul>
                </div>
            </section>
            </>
    )
};

export default Calendar;

