import React from 'react';
import '../parts/w.scss'
import {RiExchangeDollarFill} from "react-icons/ri";
import '../App.css'
import {AiFillDollarCircle} from "react-icons/ai";
function Widgets(props) {
    return (
        <div>
            <div className="blocks">
                <div className="m-b">
                    Payments
                </div>
              {/*  <div className="blocks-0">
                    <div className="top-blocks1">

                        <div>
                            <AiFillDollarCircle  className="left-ic"/>
                        </div>
                        <div className="blocks1">
                            + 10 000 <br/>  <span className="t">
                            AST
                        </span>
                        </div>

                    </div>


                </div>*/}
{/*
<div className="mid-blocks">
                        <div>
                            <AiFillDollarCircle className="right-ic"/>
                        </div>
                        <div className="blocks1">
                            - 2 000 <br/> <span className="t">
                            AST
                        </span>
                        </div>
                    </div>
                    */}

            </div>
        </div>
    );
}

export default Widgets;