export const StaffCardModal = ({ name, pfp, bio, isActive, setIsActive }) => {
  return (
    <>
      <div className={`${isActive ? 'is-active' : ''} modal`}>
        <div
          onClick={() => setIsActive(false)}
          className="modal-background"
        ></div>

        <div className="modal-content columns is-vcentered p-4">
          <div className="column">
            <img
              alt={`${name}'s profile`}
              className="profile-picture"
              src={pfp}
            />
            <p className="title is-4 mt-2">{name}</p>
            <div className="content">{bio}</div>
          </div>
        </div>

        <button
          onClick={() => setIsActive(false)}
          className="modal-close is-large"
          aria-label="close"
        ></button>
      </div>
    </>
  );
};
