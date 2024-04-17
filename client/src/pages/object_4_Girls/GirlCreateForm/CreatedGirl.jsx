import { Link, useParams } from "react-router-dom";

export default function CreatedGirl() {
  const { id } = useParams();  

  return (
    <>
      <p>Created girl: { id }</p>
      <Link to={`/girl/${id}`}>
        <p>View girl</p>
      </Link>
      <Link to={"/girlpage"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
