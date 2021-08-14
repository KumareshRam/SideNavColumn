import React from 'react';
import chick from '../images/chick.jpg'
import chickBox from '../images/chickBox.jpeg'
import profile from '../images/dhoni.jpg'
import { Icon, Progress } from 'semantic-ui-react';
import {healthList,trainingslist,trainersList} from './List'

function SideBar() {

    return (
        <div className="sideBarLayer">
            <div className="topLayer">
                <div className="profile"><img src={chick} /></div>
                <div className="name">
                    <span>Floyd Miles</span>
                    <span>Free account</span>
                </div>
                <Icon name="bell outline" size="large" >
                    <div>3</div>
                </Icon>
                <Icon name="sliders horizontal" size="large" />
            </div>
            <div className="headerText">Health</div>
            <div className="healthLayer">
                {healthList.map((data, index) => (
                    <div className={`dataWrapper ${index === 0 || index === 1 ? 'border' : ''}`}>
                        <div>{data.data}</div>
                        <div className="textLayer">
                            <Icon name={data.iconName} className={data.color} />
                            <div>{data.text}</div>
                        </div>
                        <Progress percent={data.progressPercent} color={data.color} />
                    </div>
                ))}
            </div>
            <div className="signInLayer">
                <div className="imgLayer">
                    <img src={chickBox} alt="chickBox" />
                </div>
                <div className="signUp">
                    <div>sign up for a personal trainer to improve your results</div>
                    <button>Sign Up</button>
                </div>
            </div>
            <div />
            <div className="headerText">Today Trainings</div>
            <div className="trainingLayer">
                {trainingslist.map((data) => (
                    <>
                        <div className="cardWrapper">
                            <div className="cardLayer" style={{ background: data.color }}>
                                <div className="col1">
                                    <div>{data.traniningName}</div>
                                    <div>{data.clubName}</div>
                                    <div>{data.time}</div>
                                </div>
                                <div className="col2">
                                    <div>{data.warmUp}</div>
                                    <div>min</div>
                                    <div>Warm-up</div>
                                </div>
                                <div className="col3">
                                    <div>{data.stretch}</div>
                                    <div>min</div>
                                    <div>Stretch</div>
                                </div>
                                <div className="col4">
                                    <Icon name="ellipsis vertical" size="large" />
                                </div>
                            </div>
                            <div style={{ background: data.colorLight }} />
                            <div className="curve1" />
                            <div className="curve2" />
                        </div>
                    </>

                ))}
            </div>
            <div className="headerText marTop">Your Trainers</div>
            {trainersList.map((data) => (
                <div className="yourTrainersLayer">
                    <div className="trainer-col1">
                        <div>
                            <img src={profile} alt="profile" />
                        </div>
                        <div />
                    </div>
                    <div className="trainer-col2">
                        <div>{data.username}</div>
                        <div>{data.role}</div>
                    </div>
                    <div className="trainer-col3">
                        <Icon name="facebook messenger" size="large" />
                    </div>
                </div>
            ))}
        </div>
    );
}
export default SideBar;
