import "../../MainPage/MainPage.css";
import { Link } from "react-router-dom";

export default function BoyPage() {
  return (
    <>
      <h1>Boy Page</h1>
      <Link to={"/createboy"}>
        <p>Create boy</p>
      </Link>
      <Link to={"/boys"}>
        <p>Boys</p>
      </Link>
      <Link to={"/"}>
        <p>Back to main page</p>
      </Link>
    </>
  );
}