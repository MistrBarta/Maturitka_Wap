import { Link } from "react-router-dom"

export default function DogLink(props) {
   
    return (
        <>
            <Link to={`/dog/${props._id}`}>
                <p>{props.name}</p>
            </Link>
        </>
    )
}