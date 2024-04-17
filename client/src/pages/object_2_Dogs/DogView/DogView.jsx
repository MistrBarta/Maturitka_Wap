import { Link, useParams, useNavigate } from "react-router-dom";
import { getDog, deleteDog } from "../../../models/Dog";
import { useState, useEffect } from "react";

export default function DogView() {
  const { id } = useParams();
  const [dog, setDog] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getDog(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setDog(data.payload);
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
    if (dog.name === formData) {
      const data = await deleteDog(id);
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
        <p>Dog not found</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Dog is loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Dog view</h1>
      <p>{id}</p>
      <p>{dog.name}</p>
      <p>{dog.legs}</p>
      <p>{dog.color}</p>
      <form>
        <input type="text" placeholder={dog.name} onChange={handleChange} />
        <button onClick={handleDelete}>Delete</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatedog/${id}`}>
        <p>Update dog</p>
      </Link>
      <Link to={"/dogpage"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
