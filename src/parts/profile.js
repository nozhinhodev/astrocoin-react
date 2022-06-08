import React, {useState} from 'react';
import './profile.scss'
import {Cropper, CropperRef} from "react-advanced-cropper";
function Profile(props) {
        const [image, setImage] = useState(
            'https://images.unsplash.com/photo-1599140849279-1014532882fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
        );

        const onChange = (cropper: CropperRef) => {
            console.log(cropper.getCoordinates(), cropper.getCanvas());
        };

    return (
        <div>

            <div className="card-container">
                <span className="pro">MENTOR</span>
                {/*<Cropper
                    src={image}
                    onChange={onChange}
                    className={'cropper'}
                />  */}

                <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user"/>
                <h3>Mr Killua</h3>
                <h6>Main Season #2</h6>
                <p>User interface designer and <br/> front-end developer</p>
                <div className="buttons">
                    <button className="primary">
                        Ranks
                    </button>
                    <button className="primary ghost">
                        Message
                    </button>
                </div>
                <div className="skills">
                    <h6>Skills</h6>
                    <ul>
                        <li>UI / UX</li>
                        <li>Front End Development</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Profile;