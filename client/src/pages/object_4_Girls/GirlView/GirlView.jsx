import { Link, useParams, useNavigate } from "react-router-dom";
import { getGirl, deleteGirl } from "../../../models/Girl";
import { useState, useEffect } from "react";

export default function GirlView() {
  const { id } = useParams();
  const [girl, setGirl] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getGirl(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setGirl(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (girl.name === formData) {
      const data = await deleteGirl(id);
      if (data.status === 200) {
        navigate("/");
      } else {
        setInfo(data.msg);
      }
    } else {
      setInfo("Wrong input!");
    }
  }

  if (isLoaded === null) {
    return (
      <>
        <p>Girl not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Girl is loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Girl view</h1>
      <p>{id}</p>
      <p>{girl.name}</p>
      <p>{girl.age}</p>
      <p>{girl.hobby}</p>
      <form>
        <input type="text" placeholder={girl.name} onChange={handleChange} />
        <button onClick={handleDelete}>Delete</button>
        <p>{info}</p>
      </form>
      <Link to={`/updategirl/${id}`}>
        <p>Update girl</p>
      </Link>
      <Link to={"/girlpage"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
