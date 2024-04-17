import "../../MainPage/MainPage.css";
import { Link } from "react-router-dom";

export default function CarPage() {
  return (
    <>
      <h1>Dog Page</h1>
      <Link to={"/createdog"}>
        <p>Create dog</p>
      </Link>
      <Link to={"/dogs"}>
        <p>Dogs</p>
      </Link>
      <Link to={"/"}>
        <p>Back to main page</p>
      </Link>
    </>
  );
}