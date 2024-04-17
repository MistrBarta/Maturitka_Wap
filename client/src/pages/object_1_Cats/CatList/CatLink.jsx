import { Link } from "react-router-dom"
import "../CatCreateForm/CreateForm.css";

export default function CatLink(props) {
   
    return (
        <>
            <div className="text-catlink">
            <Link to={`/cat/${props._id}`}>
                <p className="text-catlist">{props.name}</p>
            </Link>
            </div>
            
        </>
    )
}