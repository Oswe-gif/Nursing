import Image from "./image"
import './Profile.css';

const Profile = (props) => (

    <div className="profile">
      <Image src={props.user.photo} className="profile-picture" alt={"Person photo"}/>
      <div className="profile-info">
        <p className="profile-name">{props.user.name}</p>
        <p className="profile-profession">{props.user.profesion}</p>
        <p className="profile-semester">{props.user.semester}</p>
      </div>

      
    </div>

 
  )
  
export default Profile