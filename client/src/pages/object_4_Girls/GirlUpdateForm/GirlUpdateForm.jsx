import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateGirl, getGirl } from "../../../models/Girl";

export default function GirlUpdateForm() {
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
  };

  const postForm = async () => {
    const girl = await updateGirl(id, formData);
    if (girl.status === 200) {
      navigate(`/girl/${id}`);
    } else {
      setInfo(girl.msg);
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
        <p>Girl not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Girl is loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>Girl update form</h1>
      <p>{id}</p>
      <form>
        <input
          type="text"
          defaultValue={girl.name}
          name="name"
          required
          placeholder="Enter girl name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          defaultValue={girl.age}
          name="age"
          required
          placeholder="Enter age"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={girl.hobby}
          name="hobby"
          required
          placeholder="Enter hobby"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update girl</button>
      </form>
      <Link to={"/girlpage"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
