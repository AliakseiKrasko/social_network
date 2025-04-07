import './../App.css';
import img from '../wallhaven-4l76yq.png';
import React from 'react';

type Props = {

};
export const Profile = (props: Props) => {
    return (
        <div className="content">
            <div>
                <img className="img-main" src={img}/>
            </div>
            <div>
                ava + discription
            </div>
            <div>
                My posts
                <div>
                    New Posts
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    );
};