import Navbar from "../../components/Navbar/navbar";
import "./MainPage.css";
import { Link } from "react-router-dom";

export default function MainPage() {

  return (
    <>
    <Navbar />
    <h1>Main Page</h1>
      <Link to={"/catpage"}>
        <p>Cat Page</p>
      </Link>
      <Link to={"/dogpage"}>
        <p>Dog Page</p>
      </Link>
      <Link to={"/boypage"}>
        <p>Boy Page</p>
      </Link>
      <Link to={"/girlpage"}>
        <p>Girl Page</p>
      </Link>
    </>
  );
}
