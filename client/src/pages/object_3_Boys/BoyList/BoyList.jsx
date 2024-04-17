import { Link } from "react-router-dom";
import BoyLink from "./BoyLink";
import { useState, useEffect } from "react";
import { getBoys } from "../../../models/Boy";

export default function BoyList() {
  const [boys, setBoys] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getBoys();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setBoys(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Boys not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Boys are loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Boy list</h1>
      {
        boys.map((boy, index) => (
          <BoyLink key={index} {...boy} />
        ))
      }
      <Link to={"/boypage"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
