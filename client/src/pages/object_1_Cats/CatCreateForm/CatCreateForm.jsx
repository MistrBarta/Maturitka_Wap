import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCat } from "../../../models/Cat";
import "./CreateForm.css";

export default function CatCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const cat = await createCat(formData);
    if (cat.status === 201) {
      redirectToSuccessPage(cat.payload._id);
    } else {
      setInfo(cat.msg);
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
    return navigate(`/createdcat/${id}`)
  }

  return (
    <>
    <h1>Cat create form</h1>
      <div className="container">
        <form className="form-create"> 
          <input type="text" name="name" required placeholder="Enter cat name" className="input-create" onChange={handleChange}/>
          <input type="number" name="legs" required placeholder="Enter legs" className="input-create" onChange={handleChange}/>
          <input type="text" name="color" required placeholder="Enter color" className="input-create" onChange={handleChange}/>
          <button onClick={handlePost} className="button-create">
            Create cat
          </button>
        </form>
        <Link to="/catpage" className="link-page">
          <div className="link-go-back">
            <p>Go back</p>
          </div>
        </Link>
      </div>
    </>
  );
}
