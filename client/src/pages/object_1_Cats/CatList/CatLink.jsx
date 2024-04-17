import { Link } from "react-router-dom"

export default function CatLink(props) {
   
    return (
        <>
            <Link to={`/cat/${props._id}`}>
                <p>{props.name}</p>
                <p>{props.legs}</p>
                <p>{props.color}</p>
                <p>{props._id}</p>
            </Link>
        </>
    )
}