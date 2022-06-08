import React from 'react';
import './c.scss'
import card from '../assets/hackingcard.png'
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsFillCalendar3WeekFill } from "react-icons/bs";
import {Link} from "react-router-dom";
function Card() {
    return (
        <div>
            <div className="columns">
                <div className="main-col-s">

                            <img className="card" src={card} alt=""/>
                            <div className="work">
                            </div>
                            <br/>
                            <div className="t1">
                            600 000 AST
                                <div className="icons">
                                    <a href={'/send'} className="send">
                                        <BsFillArrowUpCircleFill />
                                    </a>
                                    <a href={'/get'} className="get">
                                        <BsFillArrowDownCircleFill/>
                                    </a>
                                    <a href={''} className="calendar">
                                        <BsFillCalendar3WeekFill/>

                                    </a>
                                </div>
                                <button className="button-36" role="button">Want a new card?</button>

                            </div>


                </div>

                {/*<div className="sub-cl">
                    <div className="o-bl">
                        <div className="links">
                            <div className="li-t">Transactions</div>
                            <div className="li-e">Earnings</div>
                        </div>

                    </div>
                </div>*/}

            </div>


        </div>
    );
}

export default Card;