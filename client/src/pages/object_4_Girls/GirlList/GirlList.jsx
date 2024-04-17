import { Link } from "react-router-dom";
import GirlLink from "./GirlLink";
import { useState, useEffect } from "react";
import { getGirls } from "../../../models/Girl";

export default function GirlList() {
  const [girls, setGirls] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getGirls();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setGirls(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Girls not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Girls are loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Girl list</h1>
      {
        girls.map((girl, index) => (
          <GirlLink key={index} {...girl} />
        ))
      }
      <Link to={"/girlpage"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
