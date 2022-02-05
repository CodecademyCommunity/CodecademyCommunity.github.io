export const StaffCard = (props) => {
    const {name, pfp, role} = props;

    return (
        <div className="staff-card has-background-white">
            <img alt={`${name}'s profile`} className="profile-picture" src={pfp}/>
            <p className={`name ${role}`}>{name}</p>
        </div>
    );
}
