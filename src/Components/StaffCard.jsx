import { useState } from 'react';
import { StaffCardModal } from './StaffCardModal';

export const StaffCard = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { name, pfp, role } = props;

  return (
    <>
      <div className="staff-card has-background-white">
        <img alt={`${name}'s profile`} className="profile-picture" src={pfp} />
        <p className={`name ${role}`}>{name}</p>
        <button
          onClick={() => setIsActive(!isActive)}
          className="bio-button button-hover"
        >
          See Bio
        </button>
      </div>

      <StaffCardModal
        {...props}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
};
