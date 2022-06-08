import React from 'react';
import './send.scss'
import '../App.css'
import Header from "./header";

function Send(props) {
    return (
        <div>
            <Header/>
        <div className='s'>



            <div className="top-blocks">
                <div className="about-block">
                    Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. <br/>Alias animi, architecto delectus <br/> excepturi illo in ipsam ipsum iste itaque molestiae <br/> molestias mollitia quia quod rem sapiente <br/> sunt velit vitae voluptatibus. <br/>
                </div>
                <div className="t-s">
                    <div className="tx1">
                        My wallet
                    </div>
                    <div className="inputs">

                    </div>
                    <div className="tx">
                        <input type="text" placeholder={"Type id of wallet"} className="send"/>
                    </div>
                    <div className="tx">
                        <input type="number" placeholder={"1000 ASC"} className="send"/>
                    </div>
                    <div className="tx">

                        <button className="button-s">Send</button>

                    </div>

                    <div className="tx">
                        Do you want to get money?
                    </div>
                </div>

            </div>




        </div>
        </div>
    );
}

export default Send;