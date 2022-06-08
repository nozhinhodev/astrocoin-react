import React from 'react';
import HeaderN from "./header-n";

function Reg(props) {
    return (
        <div>
            <HeaderN/>
            <div className='s'>



                <div className="top-blocks">
                    <div className="about-block">
                        Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. <br/>Alias animi, architecto delectus <br/> excepturi illo in ipsam ipsum iste itaque molestiae <br/> molestias mollitia quia quod rem sapiente <br/> sunt velit vitae voluptatibus. <br/>
                    </div>
                    <div className="t-s">
                        <div className="tx1">
                            Login
                            </div>
                        <div className="inputs">

                        </div>
                        <div className="tx">
                            <input type="text" placeholder={"Id"} className="send"/>
                        </div>
                        <div className="tx">
                            <input type="number" placeholder={"Password"} className="send"/>
                        </div>
                        <div className="tx">

                            <button className="button-s">Send</button>

                        </div>

                        <div className="tx">
                            Already have an account?
                        </div>
                    </div>

                </div>




            </div>
        </div>
    );
}

export default Reg;