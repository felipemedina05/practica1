function Description(props) {
  return (
    <>
        <h3>{props.username}</h3><small>{props.email}</small>
        <p>
            {props.descripcion}
        </p>
    </>
  )
}

export default Description