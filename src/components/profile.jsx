import Image from "./image"

const Profile = (props) => (
    <div className="profile">
      <Image src={props.user.photo} className={"profile-picture"} alt={"Person photo"}/>
      <p>{props.user.name}</p>
      <p>{props.user.profesion}</p>
      <p>{props.user.semester}</p>
      
    </div>  
  )
  
export default Profile