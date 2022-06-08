import React from 'react';
import HeaderN from "./header-n";
import './get.scss'
import QRCode from "react-qr-code";
import ReactDOM from "react-dom";
import Header from "./header";

function Get(props) {
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
                        <div itemID="Container">
                            <div style={{ background: 'white', padding: '16px' }}>
                                <QRCode
                                    value={props.value}
                                />
                            </div>
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
export default Get;