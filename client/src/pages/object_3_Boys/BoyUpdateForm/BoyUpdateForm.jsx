import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateBoy, getBoy } from "../../../models/Boy";

export default function BoyUpdateForm() {
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
  };

  const postForm = async () => {
    const boy = await updateBoy(id, formData);
    if (boy.status === 200) {
      navigate(`/boy/${id}`);
    } else {
      setInfo(boy.msg);
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
        <p>Boy not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Boy is loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Boy update form</h1>
      <p>{id}</p>
      <form>
        <input
          type="text"
          defaultValue={boy.name}
          name="name"
          required
          placeholder="Enter boy name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          defaultValue={boy.age}
          name="age"
          required
          placeholder="Enter age"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={boy.color}
          name="sport"
          required
          placeholder="Enter sport"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update boy</button>
      </form>
      <Link to={"/boypage"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
