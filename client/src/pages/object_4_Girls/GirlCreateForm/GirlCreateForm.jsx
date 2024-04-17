import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createGirl } from "../../../models/Girl";

export default function GirlCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const girl = await createGirl(formData);
    if (girl.status === 201) {
      redirectToSuccessPage(girl.payload._id);
    } else {
      setInfo(girl.msg);
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
    return navigate(`/createdgirl/${id}`)
  }

  return (
    <>
      <h1>Girl create form</h1>
      <form>
        <input type="text" name="name" required placeholder="Enter girl name" onChange={e => handleChange(e)}/>
        <input type="number" name="age" required placeholder="Enter age" onChange={e => handleChange(e)}/>
        <input type="text" name="hobby" required placeholder="Enter hobby" onChange={e => handleChange(e)}/>
        <button onClick={handlePost}>
          Create girl
        </button>
      </form>
      <Link to={"/girlpage"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
