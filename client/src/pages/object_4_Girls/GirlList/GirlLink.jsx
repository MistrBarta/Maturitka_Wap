import { Link } from "react-router-dom"

export default function GirlLink(props) {
   
    return (
        <>
            <Link to={`/girl/${props._id}`}>
                <p>{props.name}</p>
            </Link>
        </>
    )
}