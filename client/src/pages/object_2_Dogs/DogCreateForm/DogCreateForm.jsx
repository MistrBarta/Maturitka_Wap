import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createDog } from "../../../models/Dog";

export default function DogCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const dog = await createDog(formData);
    if (dog.status === 201) {
      redirectToSuccessPage(dog.payload._id);
    } else {
      setInfo(dog.msg);
    }
  }
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  
  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  }

  const redirectToSuccessPage = (id) => {
    return navigate(`/createddog/${id}`)
  }

  return (
    <>
      <h1>Dog create form</h1>
      <form>
        <input type="text" name="name" required placeholder="Enter dog name" onChange={e => handleChange(e)}/>
        <input type="number" name="legs" required placeholder="Enter legs" onChange={e => handleChange(e)}/>
        <input type="text" name="color" required placeholder="Enter color" onChange={e => handleChange(e)}/>
        <button onClick={handlePost}>
          Create dog
        </button>
      </form>
      <Link to={"/dogpage"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
