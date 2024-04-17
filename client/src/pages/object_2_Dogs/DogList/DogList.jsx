import { Link } from "react-router-dom";
import DogLink from "./DogLink";
import { useState, useEffect } from "react";
import { getDogs } from "../../../models/Dog";

export default function dogList() {
  const [dogs, setDogs] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getDogs();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setDogs(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Dogs not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Dogs are loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Dog list</h1>
      {
        dogs.map((dog, index) => (
          <DogLink key={index} {...dog} />
        ))
      }
      <Link to={"/dogpage"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
