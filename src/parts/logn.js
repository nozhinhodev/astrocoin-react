import Api from '../api/api'
import axios from "axios";
import React from "react";
import api from "../api.js"

function Logn(props) {

    const handleClick = async () => {
        try{
            await api.post("/login",{
                email: 'uubeks2@gmail.com',
                password: 'qwertyui'
            }).then((e) =>{
                console.log("Success: " + e);
            })
        }catch (e) {
            console.error("Error at Login: " + e)
        }

    }
    return (
        <div>
            <form action={'/'} className='s'>
                <div className="top-blocks">
                    <div className="about-block">
                        Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. <br/>Alias animi, architecto
                        delectus <br/> excepturi illo in ipsam ipsum iste itaque molestiae <br/> molestias mollitia quia
                        quod rem sapiente <br/> sunt velit vitae voluptatibus. <br/>
                    </div>
                    <div className="t-s">
                        <div className="tx1">
                            Login
                        </div>
                        <div className="tx">
                            <input type="email" name={'email'} placeholder={"Email"} className="send"
                                   />
                        </div>
                        <div className="tx">
                            <input type="password" name={'password'} placeholder={"Password"} className="send"
                                   />
                        </div>
                        <div className="tx">
                            <button className="button-s" type={'submit'} onClick={handleClick()} >Send</button>
                        </div>
                        <div className="tx">
                            Registration
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );


}
export default Logn;