import { Link, useParams } from "react-router-dom";

export default function CreatedDog() {
  const { id } = useParams();  

  return (
    <>
      <p>Created dog: { id }</p>
      <Link to={`/dog/${id}`}>
        <p>View dog</p>
      </Link>
      <Link to={"/dogpage"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
