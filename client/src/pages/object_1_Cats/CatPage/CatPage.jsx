import "../../MainPage/MainPage.css";
import { Link } from "react-router-dom";

export default function CatPage() {
  return (
    <>
      <h1>Cat Page</h1>
      <Link to={"/createcat"}>
        <p>Create cat</p>
      </Link>
      <Link to={"/cats"}>
        <p>Cats</p>
      </Link>
      <Link to={"/"}>
        <p>Back to main page</p>
      </Link>
    </>
  );
}