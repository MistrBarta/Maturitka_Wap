import { Link } from "react-router-dom";
import CatLink from "./CatLink";
import { useState, useEffect } from "react";
import { getCats } from "../../../models/Cat";
import "../CatCreateForm/CreateForm.css";

export default function CatList() {
  const [cats, setCats] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getCats();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCats(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Cats not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Cats are loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Cat list</h1>
      <Link className="button-catlist-div" to={"/catpage"}>
        <button className="button-catlist">Go back</button>
      </Link>
      {
        cats.map((cat, index) => (
          <CatLink key={index} {...cat} />
        ))
      }
      
    </>
  );
}
