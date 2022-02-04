export const StaffCard = (props) => {
    const {key, name, pfp, role} = props;

    return (
        <div key={key} className="staff-card has-background-white">
            <img className="profile-picture" src={pfp}/>
            <p className={`name ${role}`}>{name}</p>
        </div>
    );
}
