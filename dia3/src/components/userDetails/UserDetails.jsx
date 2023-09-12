import Description from "../description/Description"
import UserImage from "../userImage/UserImage"

function UserDetails({username,email, descripcion}) {
  return (
    <>
        <UserImage></UserImage>
        <Description username={username} email={email} descripcion={descripcion}></Description>
    </>
  )
}

export default UserDetails