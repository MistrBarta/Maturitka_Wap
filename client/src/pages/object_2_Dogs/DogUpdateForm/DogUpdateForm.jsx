import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateDog, getDog } from "../../../models/Dog";

export default function DogUpdateForm() {
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
  };

  const postForm = async () => {
    const dog = await updateDog(id, formData);
    if (dog.status === 200) {
      navigate(`/dog/${id}`);
    } else {
      setInfo(dog.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Dog not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Dog is loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>dog update form</h1>
      <p>{id}</p>
      <form>
        <input
          type="text"
          defaultValue={dog.name}
          name="name"
          required
          placeholder="Enter dog name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          defaultValue={dog.legs}
          name="legs"
          required
          placeholder="Enter legs"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={dog.color}
          name="color"
          required
          placeholder="Enter color"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update dog</button>
      </form>
      <Link to={"/dogpage"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
