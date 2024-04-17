import "../../MainPage/MainPage.css";
import { Link } from "react-router-dom";
import "./Page.css";

export default function CatPage() {
  return (
    <>
      <div className="tittle-page">
        <h1>Cat Page</h1>
      </div>
      <div className="content-page">
      <Link to={"/createcat"}>
        <div className="navigation-page-create">
          <p>Create cat</p>
        </div>
      </Link>
      <Link to={"/cats"}>
        <div className="navigation-page">
        <p>Cats</p>
        </div>
      </Link>
      </div>
    </>
  );
}