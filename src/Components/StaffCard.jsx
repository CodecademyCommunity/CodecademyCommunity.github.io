import {useState} from 'react';

export const StaffCard = (props) => {
    const {name, pfp, role, bio} = props;
    const [isActive, setIsActive] = useState(false);
    
    return (
        <>
            <div className="staff-card has-background-white">
                <img alt={`${name}'s profile`} className="profile-picture" src={pfp}/>
                <p className={`name ${role}`}>{name}</p>
                <button onClick={() => setIsActive(!isActive)} className="bio-button">See Bio</button>
            </div>

            <div className={`${isActive ? "is-active" : ""} modal`}>
                <div onClick={() => setIsActive(false)} className="modal-background"></div>
                <div className="modal-content">
                    <p>{bio}</p>
                </div>
                <button onClick={() => setIsActive(false)} className="modal-close is-large" aria-label="close"></button>
            </div>
        </>
    );
}
