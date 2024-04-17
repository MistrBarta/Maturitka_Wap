import { Link, useParams } from "react-router-dom";

export default function CreatedCat() {
  const { id } = useParams();  

  return (
    <>
      <h1 className="created-tittle">Cat created</h1>
      <p className="created-id">ID: { id }</p>
      <div className="created-buttons">
        <Link to={`/cat/${id}`}>
          <button className="created-button-cat">View cat</button>
        </Link>
        <Link to={"/catpage"}>
          <button className="created-button-home">Go home</button>
        </Link>
      </div>
    </>
  );
}
