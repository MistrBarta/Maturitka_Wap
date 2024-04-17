import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createBoy } from "../../../models/Boy";

export default function BoyCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const boy = await createBoy(formData);
    if (boy.status === 201) {
      redirectToSuccessPage(boy.payload._id);
    } else {
      setInfo(boy.msg);
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
    return navigate(`/createdboy/${id}`)
  }

  return (
    <>
      <h1>Boy create form</h1>
      <form>
        <input type="text" name="name" required placeholder="Enter boy name" onChange={e => handleChange(e)}/>
        <input type="number" name="age" required placeholder="Enter age" onChange={e => handleChange(e)}/>
        <input type="text" name="sport" required placeholder="Enter sport" onChange={e => handleChange(e)}/>
        <button onClick={handlePost}>
          Create boy
        </button>
      </form>
      <Link to={"/boypage"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
