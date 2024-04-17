import { Link, useParams, useNavigate } from "react-router-dom";
import { getBoy, deleteBoy } from "../../../models/Boy";
import { useState, useEffect } from "react";

export default function BoyView() {
  const { id } = useParams();
  const [boy, setBoy] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getBoy(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setBoy(data.payload);
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
    if (boy.name === formData) {
      const data = await deleteBoy(id);
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
        <p>Boy not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Boy is loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Boy view</h1>
      <p>{id}</p>
      <p>{boy.name}</p>
      <p>{boy.age}</p>
      <p>{boy.sport}</p>
      <form>
        <input type="text" placeholder={boy.name} onChange={handleChange} />
        <button onClick={handleDelete}>Delete</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateboy/${id}`}>
        <p>Update boy</p>
      </Link>
      <Link to={"/boypage"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
