import "../../MainPage/MainPage.css";
import { Link } from "react-router-dom";

export default function GirlPage() {
  return (
    <>
      <h1>Girl Page</h1>
      <Link to={"/creategirl"}>
        <p>Create girl</p>
      </Link>
      <Link to={"/girls"}>
        <p>Girls</p>
      </Link>
      <Link to={"/"}>
        <p>Back to main page</p>
      </Link>
    </>
  );
}