import { Link, useParams } from "react-router-dom";

export default function CreatedBoy() {
  const { id } = useParams();  

  return (
    <>
      <p>Created boy: { id }</p>
      <Link to={`/boy/${id}`}>
        <p>View boy</p>
      </Link>
      <Link to={"/boypage"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
